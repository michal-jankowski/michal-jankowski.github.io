// na podstawie eduweb... - coś takiego chyba trzeba będzie dodać;)

(function () {
    let map = {

        init: function (options) {
            this.options = options;
            this.location = this.options.location;

            this.makeMap();
        },

        makeMap: function () {
            let officeLoc = this.location.split(",");
            let officePosition = new google.maps.LatLng(officeLoc[0], officeLoc[1]);

            let mapOptions = {
                zoom: 16,
                center: officePosition,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.mapObj = new google.maps.Map(document.getElementById("js-contact-form__map"), mapOptions);

            let marker = new google.maps.Marker({
                map: this.mapObj,
                position: officePosition
                // animation: google.maps.Animation.BOUNCE
            })
        }
    }

    map.init({
        location: "52.216929, 21.228661"
    });

})();