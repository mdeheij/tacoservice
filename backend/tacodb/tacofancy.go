package tacodb

import (
	"errors"
	"os"
	"path/filepath"
	"strings"

	"github.com/google/wire"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

// import "github.com/google/wire"

var TacofancySet = wire.NewSet(NewTacofancy)

type Tacofancy struct {
	TacofancyDir string
	data         []*TacoRecipe
}

//Recipe DTO
type TacoRecipe struct {
	Name     string `json:"name"`
	Category string `json:"category"`
	Filename string `json:"filename"`
	Content  string `json:"content"`
}

//TODO: for now it must have trailing slash
func NewTacofancy() *Tacofancy {
	dir := viper.GetString("TACOFANCY_DIR")
	log.Infof("Using tacodir: '%v'", dir)
	return &Tacofancy{
		TacofancyDir: dir,
	}
}

func (t *Tacofancy) All() (tacos []*TacoRecipe) {
	if len(t.data) == 0 {
		t.data = t.parseAllRecipes(t.TacofancyDir)
	}
	// log.Debugf("Tacofancy: %v", t)
	return t.data
}

func (t *Tacofancy) parseAllRecipes(dir string) (tacos []*TacoRecipe) {
	files, err := walkDir(dir)
	if err != nil {
		log.Fatal("No taco :(")
	}
	for _, file := range files {
		if !strings.HasSuffix(file, ".md") {
			continue
		}

		if parsed, err := t.ParseRecipe(file); err != nil {
			log.WithFields(log.Fields{"file": file}).Warn("Unable to parse recipe")
		} else {
			tacos = append(tacos, parsed)
		}
	}

	return tacos
}

func (t *Tacofancy) ParseRecipe(filename string) (*TacoRecipe, error) {
	log.Debug("Parsing recipe: ", filename)

	strippedExt := strings.TrimSuffix(filename, ".md")
	spaced := strings.ReplaceAll(strippedExt, "_", " ")
	splitted := strings.Split(spaced, "/")

	if len(splitted) < 3 {
		return nil, errors.New("not a recipe file")
	}

	name := strings.Split(spaced, "/")[2]

	content, err := readFileContent(t.TacofancyDir + filename)
	return &TacoRecipe{
		Name:     name,
		Category: strings.Split(filename, "/")[1],
		Filename: strings.TrimPrefix(strippedExt, "/"),
		Content:  content,
	}, err
}

func readFileContent(filename string) (string, error) {
	dat, err := os.ReadFile(filename)

	return string(dat), err
}

func walkDir(root string) (files []string, err error) {
	err = filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		log.Debugf("Walking path: %v in root: %v", path, root)

		filename := strings.TrimPrefix(path, root)
		if len(filename) == 0 || strings.Contains(filename, "INDEX") || strings.Contains(filename, "README") { //TODO: blacklist?
			return nil
		}

		files = append(files, filename)
		return nil
	})
	if err != nil {
		return nil, err
	}
	return files, nil
}
