package router

import (
	c "coders/controller"

	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func ApplyRoutes(r *gin.Engine) {
	r.GET("/ping", c.PingExample)
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	v1 := r.Group("/api/v1")
	{
		members := v1.Group("/members")
		{
			members.GET("", c.ListMembers)
			members.GET(":id", c.ShowMember)
			members.POST("", c.AddMember)
			members.PATCH(":id", c.UpdateMember)
			members.DELETE(":id", c.DeleteMember)
		}
		problems := v1.Group("/problems")
		{
			problems.GET("", c.ListProblems)
			problems.GET(":id", c.ShowProblem)
			problems.POST("", c.AddProblem)
			problems.PATCH(":id", c.UpdateProblem)
			problems.DELETE(":id", c.DeleteProblem)
		}
		submissions := v1.Group("/submissions")
		{
			submissions.GET("", c.ListSubmissions)
			submissions.GET(":id", c.ShowSubmission)
			submissions.POST("", c.AddSubmission)
			submissions.DELETE(":id", c.DeleteSubmission)
		}
	}
}
