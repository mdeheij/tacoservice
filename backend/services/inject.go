//+build wireinject

package services

import (
	"github.com/google/wire"
	"github.com/mdeheij/tacoservice/tacodb"
)

func Tacofancy() *tacodb.Tacofancy {
	panic(wire.Build(tacodb.TacofancySet))
}
