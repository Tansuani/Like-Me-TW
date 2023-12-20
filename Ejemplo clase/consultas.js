import pg from 'pg'

const pool = new pg.Pool({
host: 'localhost',
user: 'postgres',
password: 'Amara01.',
database: 'plan_de_viajes',
allowExitOnIdle: true
})

const getTravel = async () => {
    const sqlQuery = "SELECT * FROM viajes"
const {rows} = await pool.query(sqlQuery)
console.log(rows)
}
getTravel()

//const agregarViaje = async (destino, presupuesto) => {
//    const consulta = "INSERT INTO viajes (destino, presupuesto) values ($1, $2)"
//    const values = [destino, presupuesto]
 //   const result = await pool.query(consulta, values)
 //   console.log("Viaje agregado", result)
 //   }
    
 //   agregarViaje("Brazil", 1200)

