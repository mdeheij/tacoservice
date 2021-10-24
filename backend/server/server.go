package server

import (
	"time"

	"github.com/gin-gonic/gin"
	"github.com/mdeheij/tacoservice/services"
)

func Start() {
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	tdb := services.Tacofancy()

	// TODO: common go service library with github.com/mdeheij/common-go/gin functions
	r.GET("/metrics/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"ready": true,
			"time":  time.Now(),
			// "customers": customers,
		})
	})

	r.StaticFile("favicon.png", "./frontend/build/_app/favicon.png")
	r.Static("/_app", "./frontend/build/_app")

	r.NoRoute(func(c *gin.Context) {
		c.File("./frontend/build/index.html")
	})

	api := r.Group("/api")
	api.GET("/tacos", func(c *gin.Context) {
		c.JSON(200, tdb.All())
	})

	r.Run()
}
