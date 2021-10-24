package cmd

import (
	"fmt"

	"github.com/mdeheij/tacoservice/services"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
)

// listCmd represents the server command
var listCmd = &cobra.Command{
	Use:   "list",
	Short: "List tacos",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("list called")

		t := services.Tacofancy()
		log.Info(t)

		t.BaseLayers()
		// server.Start()
	},
}

func init() {
	rootCmd.AddCommand(listCmd)
}
