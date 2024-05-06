'use client'
import * as React from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin} from "@vis.gl/react-google-maps"

interface Position {
  lat: number;
  lng: number;
}

export default function MyMap() {
  return (
    <APIProvider apiKey={"AIzaSyCa8Ko4M1hPMFqRhUKhLeiliOkThyPdJDM"}>
      <div style={{ height: "80vh", width: "50vw" }}>
        <Map zoom={13} center={{ lat: -25.29, lng: -49.22 }} mapId={"3de389109fc099e3"}>
          <AdvancedMarker position={{ lat: -25.29, lng: -49.22 }}>
            <Pin background={"purple"} borderColor={"purple"} />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
