package main

import (
	"context"
	trippb "coolcar/proto/gen/go"
	"fmt"
	"log"

	"google.golang.org/grpc"
)


func main() {
	conn, err := grpc.Dial("localhost:8081", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("cannot connect server: %v", err)
	}

	tsClient := trippb.NewTripServiceClient(conn)
	resp, err := tsClient.GetTrip(context.Background(), &trippb.GetTripRequest{
		Id: "trip456",
	})
	if err != nil {
		log.Fatalf("cannot call GetTrip: %v", err)
	}
	fmt.Println(resp)
}