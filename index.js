class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.split(" ").map(w => w = w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
  } 

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-" "']/g,'')
  }

  static titleize(string){
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let string_arr = string.split(" ")
    return string_arr.map(w => 
      !arr.includes(w) || string_arr.indexOf(w) === 0? this.capitalize(w) : w
    ).join(" ")
  }
}