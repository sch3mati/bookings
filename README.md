
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

### Get restaurant name
  * GET `/api/bookings/restaurantName/:restaurantId`

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "seatCapacity": "Number"
    }
```

### Get reservation
  * GET `/api/bookings/:restaurantId`

**Success Status Code:** `200`

**Returns:** string: whether or not reservation is made


### Add reservation
  * POST `/api/bookings/:restaurantId`

**Success Status Code:** `200`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "restuarantId": "Number",
      "name": "String",
      "partySize": "Number",
      "date": "Number",
      "contactInfo": "String",
      "occasion": "String"
    }
```

### Update reservation info
  * PUT `/api/bookings/:restaurantId`


**Success Status Code:** `200`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "restuarantId": "Number",
      "name": "String",
      "partySize": "Number",
      "date": "Number",
      "contactInfo": "String",
      "occasion": "String"
    }
```

### Delete reservation
  * DELETE `/api/bookings/:restaurantId`

**Success Status Code:** `200`
