package cmd

import (
	"github.com/mdeheij/tacoservice/server"
	log "github.com/sirupsen/logrus"

	"github.com/spf13/cobra"
)

// serverCmd represents the server command
var serverCmd = &cobra.Command{
	Use:   "server",
	Short: "Start webserver",
	Run: func(cmd *cobra.Command, args []string) {
		log.Info("Starting backend server")
		server.Start()
	},
}

func init() {
	rootCmd.AddCommand(serverCmd)
}
