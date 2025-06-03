function generatePrompt() {
  const lokasi = document.getElementById("lokasi").value.trim();
  const tema = document.getElementById("tema").value.trim();
  const suasana = document.getElementById("suasana").value.trim();
  const bahasa = document.getElementById("bahasa").value;

  const peranEls = document.querySelectorAll("#peran-container .peran");
  let hasilPrompt = "";

  peranEls.forEach((el, index) => {
    const deskripsiID = el.querySelectorAll("input")[0].value.trim(); // Deskripsi karakter bahasa Indonesia
    const dialog = el.querySelector("textarea").value.trim(); // Dialog bahasa Indonesia
    const aksiID = el.querySelectorAll("input")[1].value.trim(); // Aktivitas bahasa Indonesia
    const ekspresiID = el.querySelectorAll("input")[2].value.trim(); // Ekspresi bahasa Indonesia

    // Untuk prompt, kita ubah ke bahasa Inggris manual atau otomatis (ini contoh manual sederhana)
    // Kamu bisa ganti kalimat di bawah dengan fungsi translate kalau mau otomatis
    const deskripsiEN = translateToEnglish(deskripsiID);
    const aksiEN = translateToEnglish(aksiID);
    const ekspresiEN = translateToEnglish(ekspresiID);
    const temaEN = translateToEnglish(tema);
    const suasanaEN = translateToEnglish(suasana);
    const lokasiEN = translateToEnglish(lokasi);

    // Prompt bahasa Inggris, dialog tetap bahasa Indonesia
    const prompt = `${deskripsiEN} is ${aksiEN} at ${lokasiEN}, with a ${ekspresiEN} expression, saying, "${dialog}" - ${temaEN} - ${suasanaEN} lighting, cinematic style`;

    hasilPrompt += `Character ${index + 1}:\n${prompt}\n\n`;
  });

  // Tambahkan instruksi bahasa ke Veo supaya output suara/dialog bahasa Indonesia
  hasilPrompt += "#language: Indonesian";

  document.getElementById("hasil").value = hasilPrompt.trim();
}

// Contoh fungsi translate sederhana (hanya hardcoded, ganti dengan API translate kalau perlu)
function translateToEnglish(text) {
  const kamus = {
    "seorang tentara dengan wajah lelah": "a tired soldier",
    "berlari sambil memegang senjata": "running while holding a weapon",
    "frustasi dan kelaparan": "frustrated and hungry",
    "Dikejar beruang": "chased by bears",
    "Hutan": "forest",
    "seram": "scary",
    "cerah": "bright",
    "malam": "night",
    "perang": "war",
    "ledakan": "explosion",
    "asap": "smoke"
    // Tambahkan kata lain sesuai kebutuhan
  };

  return kamus[text.toLowerCase()] || text;
}
