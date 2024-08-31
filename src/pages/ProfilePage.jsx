

export const ProfilePage = () => {
  return (
    <div className="profile-page" >
        <div className="containerP ">
          <h2 style={{ textAlign: 'center', color:"rgb(40, 130, 199)", marginTop:"10px" }}>Bienvenido!!!</h2>
          <br />
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="staticEmail2" className="form-label">Ingresa tu correo electrónico</label>
              <input 
                type="text" 
                readOnly 
                className="form-control" 
                id="staticEmail2" 
                value="usuario@ejemplo.com" 
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ maxWidth: '150px', marginTop: '20px' }}
              >
                Cerrar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}
