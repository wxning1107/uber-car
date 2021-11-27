package trip

import (
	"context"
	trippb "coolcar/proto/gen/go"
)

type Service struct {
}

func (s *Service) GetTrip(ctx context.Context, req *trippb.GetTripRequest) (*trippb.GetTripResponse, error) {
	return &trippb.GetTripResponse{
		Id: req.Id,
		Trip: &trippb.Trip{
			Start:       "abc",
			End:         "def",
			DurationSec: 0,
			Status:      trippb.TripStatus_NOT_STARTED,
		},
	}, nil
}
