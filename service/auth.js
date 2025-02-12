
const sessionidMap = new Map();

function setuser(id, user){
    sessionidMap.set(id, user)

}
function getuser(id){

   return sessionidMap.get(id)
}
module.exports = {
    setuser,
    getuser
}