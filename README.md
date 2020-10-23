
# bookings-service
This is a feature to see available times for selected dates and number of guests

## Related Projects

  - https://github.com/TKOut-HRSF130/popular-dishes-service
  - https://github.com/TKOut-HRSF130/photos-carousel-service
  - https://github.com/TKOut-HRSF130/bookings-service
  - https://github.com/TKOut-HRSF130/reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API Endpoints

### Get a restaurant
  * GET `/api/restaurants/:restaurantId`

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "seatCapacity": "Number",
      "timeSlots": [{"Capacity": "Number", "Time": "Number"}]
    }
```

### Get a reservation
  * GET `/api/restaurants/:restaurantId/bookings/:bookingId`

**Success Status Code:** `200`

**Returns:**
  ```json
    {
      "restuarantId": "Number",
      "user": "String",
      "partySize": "Number",
      "dateAndTime": "Number",
      "phone": "String",
      "occasion": "String"
    }
```

### Add a reservation
  * POST `/api/restaurants/:restaurantId/bookings`

**Success Status Code:** `200`

```json
    {
      "restuarantId": "Number",
      "name": "String",
      "partySize": "Number",
      "dateAndTime": "Number",
      "phone": "String",
      "occasion": "String"
    }
```


### Update a reservation
  * PATCH `/api/restaurants/:restaurantId/bookings/:bookingId`


**Success Status Code:** `200`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "name": "String",
      "partySize": "Number",
      "dateAndTime": "Number",
      "phone": "String",
      "occasion": "String"
    }
```

### Delete a reservation
  * DELETE `/api/restaurants/:restaurantId/bookings/:bookingId`

**Success Status Code:** `200`
