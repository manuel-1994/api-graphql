const tokenToCookie = (res, data)=>{
  res.cookie('token',data.token,{
    httpOnly:true})
  return data
}

module.exports = tokenToCookie