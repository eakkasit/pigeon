import { MapsAPILoader, AgmMap } from '@agm/core';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
declare var google: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild('placestart') public searchstartElement: ElementRef;
  @ViewChild('placeend') public searchendElement: ElementRef;
  @ViewChild(AgmMap)
  public agmMap: AgmMap

  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number = 18.796143;
  lng: number = 98.979263;

  markers: marker[] = [];
  // show map right
  showmap = true;
  markershow = false;

  //show direction
  dir = undefined;
  diroptions = {
    suppressMarkers: true,
    draggable: true,
  };
  price = 0;
  payment = false;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, ) { }

  ngOnInit() {
    this.payment = false;
    this.mapsAPILoader.load().then(
      () => {
        let start_place = new google.maps.places.Autocomplete(this.searchstartElement.nativeElement, { types: ["address"] });

        start_place.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place = start_place.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            this.showmap = true;

            if (this.lat && this.lng) {
              this.lat = place.geometry.location.lat();
              this.lng = place.geometry.location.lng();
              this.zoom = 17;
            }
            let mark =
              {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                label: '1',
                draggable: true
              }
            this.markers[0] = mark;
            this.markershow = true;

            if (this.markers.length == 2) {
              this.dir = {
                origin: { lat: this.markers[0].lat, lng: this.markers[0].lng },
                destination: { lat: this.markers[1].lat, lng: this.markers[1].lng }
              }
              // this.getPrice();
            }

          });
        });

        let end_place = new google.maps.places.Autocomplete(this.searchendElement.nativeElement, { types: ["address"] });

        end_place.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place = end_place.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            this.showmap = true;
            if (this.lat && this.lng) {
              this.lat = place.geometry.location.lat();
              this.lng = place.geometry.location.lng();
              this.zoom = 17;
            }



            let mark =
              {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                label: '2',
                draggable: true
              }
            this.markers[1] = mark;
            this.markershow = true;

            if (this.markers.length == 2) {
              this.dir = {
                origin: { lat: this.markers[0].lat, lng: this.markers[0].lng },
                destination: { lat: this.markers[1].lat, lng: this.markers[1].lng }
              }
              // this.getPrice();
            }


          });
        });
      }
    );
  }

}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}