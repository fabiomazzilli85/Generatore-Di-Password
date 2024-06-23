function securePassword(length = 12) {
  // Definisci i caratteri che saranno utilizzati nella password
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  // Unisci tutti i caratteri in un'unica stringa
  const allCharacters = uppercase + lowercase + numbers + specialCharacters;

  // La password finale
  let password = "";

  // Assicurati che la password contenga almeno un carattere di ogni tipo
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  // Aggiungi caratteri casuali fino a raggiungere la lunghezza desiderata
  for (let i = password.length; i < length; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  // Mischia la password per assicurare che i caratteri non siano in un ordine prevedibile
  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return password;
}

// Funzione per gestire il click del bottone e mostrare la password generata
document.getElementById("generateBtn").addEventListener("click", () => {
  const password = securePassword();
  document.getElementById("passwordDisplay").textContent = password;
});
