package cmd

import "github.com/spf13/viper"

func setConfigDefault() {
	viper.SetDefault("TACOFANCY_DIR", "../../tacoservice/tacofancy")
}
