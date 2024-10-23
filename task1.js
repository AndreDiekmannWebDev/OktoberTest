function startsWithLosOrNew(str) {
    // Konvertiere den String in Kleinbuchstaben, um Groß- und Kleinschreibung zu ignorieren
    const lowerStr = str.toLowerCase();
    
    // Überprüfe, ob der String mit "los" oder "new" beginnt
    return lowerStr.startsWith("los") || lowerStr.startsWith("new");}
   
    // Beispiele
console.log(startsWithLosOrNew("New York"));    // ➞ true
console.log(startsWithLosOrNew("newark"));      // ➞ true
console.log(startsWithLosOrNew("London"));      // ➞ false
console.log(startsWithLosOrNew("Los Angeles")); // ➞ true
console.log(startsWithLosOrNew("lOs Angeles")); // ➞ true
console.log(startsWithLosOrNew("San Carlos"));  // ➞ false
