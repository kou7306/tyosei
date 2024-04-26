package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type SubmitData struct {
    EventName string `json:"eventName"`
    StartDate      string `json:"startDate"`
	EndDate      string `json:"endDate"`
    Memo      string `json:"memo"`
}

func main() {
    engine := gin.Default()
    engine.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{"message": "Hello, world!"})
    })
    
    engine.POST("/submit", func(c *gin.Context) {
        var data SubmitData
        if err := c.BindJSON(&data); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }
        log.Printf("Received: %#v", data)
        c.JSON(http.StatusOK, gin.H{"message": "Data received", "data": data})
    })
    engine.Run(":3001")
}
