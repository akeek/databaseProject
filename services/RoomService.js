class RoomService {
    constructor(db) {
        this.client = db.sequelize;
  this. Room = db. Room;
        console.log(db)
    }
  
  async create(capacity, pricePerDay, hotelId) {
  return this. Room.create(
            {
                Capacity: capacity,
                PricePerDay: pricePerDay,
                HotelId: hotelId
            }
        )
    }
  
    async get() {
  return this. Room.findAll({
            where: {}
        })
    }
  
    async getHotelRooms(hotelId) {
  return this. Room.findAll({
            where: {
                HotelId: hotelId
            }
        })
    }
  
    async deleteRoom(roomId) {
  return this. Room.destroy({
            where: {id: roomId}
        })
    }
  }
  module.exports = RoomService;