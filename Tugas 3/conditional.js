// gunakan readline buat I/O
const readline = require('node:readline'); 
const { stdin: input, stdout: output } = require('node:process'); 

const rl = readline.createInterface({ input, output });

// tanya nama dan peran
rl.question('Masukkan nama: ', (name) => { 
  const nama = (name || '').trim(); //hilangkan spasi

  // jika nama kosong
  if (!nama) {
    console.log('Nama harus diisi!'); // validasi nama kosong 
    rl.close(); 
  } else {
    // jika peran kosong, setelah input nama ada
    rl.question('Masukkan peran (Penyihir/Guard/Werewolf): ', (role) => {
      const peran = (role || '').trim(); //hilangkan spasi

      if (!peran) {
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`); // validasi peran kosong 
        rl.close(); 
      } else {


        console.log(`Selamat datang di Dunia Werewolf, ${nama}`); 
        const lower = peran.toLowerCase(); //agar tidak case sensitive

        if (lower === 'penyihir') {
          console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`); 
        } else if (lower === 'guard') {
          console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`);
        } else if (lower === 'werewolf') {
          console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`); 
        } else {
          console.log(`Peran tidak dikenal: ${peran}`); 
        }

        rl.close(); // exit
      }
    });
  }
});
