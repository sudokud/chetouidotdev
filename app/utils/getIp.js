//ip is dynamic
// pass it to GetGeo function
//token ned to be moved to env variables
async function GetGeo(ip) {
    const response = await fetch(`https://ipinfo.io/${ip}?token=7f08d950bc9cac`);
    const geoObject = await response.json();
    // console.log(geoObject)
    return geoObject
}

export default GetGeo