class Contact {
    constructor(name, cpf, phone, zipcode, state, city, neighborhood, street, number, lat, lng) {
        this.contact_id = uuidv4();
        this.name = name;
        this.cpf = cpf;
        this.phone = phone;
        this.zipcode = zipcode;
        this.state = state;
        this.city = city;
        this.neighborhood = neighborhood;
        this.street = street;
        this.number = number;
        this.lat = lat;
        this.lng = lng;
    }

    uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
    }

    create() {
        localStorage.setItem(this.contact_id, JSON.stringify(this));
    }

    find(contact_id) {
        localStorage.getItem("contact_id");
    }

    delete(contact_id) {
        localStorage.removeItem("contact_id");
    }
    update(contact_id) {
        localStorage.setItem(this.contact_id, JSON.stringify(this));
    }
}