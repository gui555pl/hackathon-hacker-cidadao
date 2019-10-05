<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
      latitude: '',
      longitude: ''
    }, 
     ]
    }
  },
  created () {
      let cord = this.$store.getters.getCord
      console.log(cord)
      this.markerCoordinates[0].latitude = cord.lat
      this.markerCoordinates[0].longitude = cord.long
  },
  mounted: function () {
    const element = document.getElementById(this.mapName)
    // console.log(typeof(parseFloat(this.latitude)))
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(parseFloat(this.markerCoordinates[0].latitude),parseFloat(this.markerCoordinates[0].longitude))
    }
    const map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
    const position = new google.maps.LatLng(coord.latitude, coord.longitude);
    console.log(position)
    const marker = new google.maps.Marker({ 
        position,
        map
  });
});
  }
};
</script>
<style scoped>
.google-map {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background: gray;
}
</style>