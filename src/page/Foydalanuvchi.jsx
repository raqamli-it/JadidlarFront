import React from "react";
import Menu from "../components/components/Menu";
import Search from "../components/components/Search";
import { Link } from "react-router-dom";

export default function Foydalanuvchi() {
  let x = document.querySelector("title");
  x.textContent = "Foydalanuvchiga";
  return (
    <div className="foydalanuvchi_container">
      <Menu title="foydalanuvchiga" />
      <Search />
      <div className="foydalanuvchi_content">
        <div className="foydalanuvchi_img">
          <img
            className="foydalanuvchi_image"
            src="http://jadidlar.uz:2118/storage/uploads/pages/iTSsRHlBuCx29PhqIEI7mgRN36XMaMRgxomznByT.jpg"
          />
        </div>
        <div className="foydalanuvchi_title">
          <h1 className="h1">
            Jadidlar.uz elektron platformasidan foydalanish uchun qo‘llanma
          </h1>
        </div>
        <h6>
          <Link to="/">Bosh sahifa</Link>
        </h6>

        <div className="foydalanuvchi_bolak bolak_1">
          <h3 className="abzats">
            {" "}
            Bosh sahifa bir nechta bo'laklardan iborat:
          </h3>
          <h3 className="bolak_title">
            {" "}
            Birinchi bo'lak, sandiqlar qatori joylashgan bo‘lib unda:
            “Jadidlar”, “Til va imlo”, “Manbalar”, “Izlanishlar”, “Turkiston
            muxtoriyati”, “Voqealar”, “Foydalanuvchiga”, “Biz haqimizda” deb
            nomlangan sandiqlar hamda “qidiruv” va “tilni ozgartirish” amali
            o‘rin olgan.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/cgKY2ix5RR4WvQ0FGQxQwvq08M4XE9Pv4J7jmCPs.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="foydalanuvchi_bolak bolak_2">
          <h3 className="abzats">
            {" "}
            Ikkinchi bo'lak, elektron platfotmaning bosh sahifasida jadidlarning
            rasmi joylashgan slayder joylashgan. Unda:
          </h3>
          <h3 className="bolak_title">
            {" "}
            Jadidlarga tegishli hikmatli so‘zlar, <br />
            Batafsil tugmasini bosish orqali ma’lumotni to‘liq olish imkoniyati,{" "}
            <br />
            O‘ng va chapga yo‘naltirish tugmalari orqali oldingi yoki keyingi
            namoyishga o‘tish imkoniyatlari berilgan.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/GkQLrWbTHWebYhbPNdCxbkXTY4bCKc5CZn4yk0i7.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="foydalanuvchi_bolak bolak_3">
          <h3 className="bolak_title">
            {" "}
            Uchinchi bo'lak, bu yerda jadidlar hayoti, faoliyatiga oid so‘nggi
            tadqiqotlar anonsi berilgan bo‘lib, “Batafsil” tugmasini bosish
            orqali yangilik haqida to‘liq ma’lumot olish mumkin.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/fDGFr1ITgT9DSehJCFaeqvdHnmwuLA2aa0mGuuxe.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="foydalanuvchi_bolak bolak_4">
          <h3 className="bolak_title">
            {" "}
            To‘rtinchi bo'lak, bunda jadidlar haqida ma’lumotlar berilgan.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/4tD7bwIZau8XJz4JYySlKqmb7zUDBHBKM3CME4pP.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="foydalanuvchi_bolak bolak_5">
          <h3 className="bolak_title">
            {" "}
            Beshinchi bo'lak, bu joyda til va imlo haqida aniqlangan yangi
            materiallar, arxiv hujjatlari qo‘yib boriladi.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/t8SQXRnEGwLgi2Pad9V53AT6ihFjOZM4S5fTAMmv.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="foydalanuvchi_bolak bolak_6">
          <h3 className="bolak_title">
            {" "}
            Oltinchi bo'lak, “Ko‘ring-eshiting-o‘qing” qismi bo‘lib jadidlar va
            jadidchilik haqidagi ko‘ruv, rasm va eshituv materiallari joylangan.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/O7Zh7YM4VtNccZ2nPIosnC5rnIUCUywYQVx45uCq.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="foydalanuvchi_bolak bolak_7">
          <h3 className="bolak_title">
            {" "}
            Yettinchi bo'lak, bu bo'lak “Foydali havolalar” deb nomlanib unda
            yuqori tashkilotlar va boshqa loyihalarning rasmiy saytiga havolalar
            berilgan.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/g7UJ43bf2ojtilE9Bm6BK8Wt3KpOfAZr8i9n6dSt.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="foydalanuvchi_bolak bolak_8">
          <h3 className="bolak_title">
            Sakkizinchi bo'lak, bosh sahifadagi oxirgi bo'lak bo‘lib, sayt
            haqida ma’lumotlar hamda biz bilan bog‘lanish uchun elektron pochta
            va telefon raqamlar joylangan.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/a5GMT7xVPn94mvyCu6kPtcCdFQK9H4HQ7EmRzERk.jpg"
              alt=""
            />
          </div>
          <h3 className="abzats">
            {" "}
            Bosh sahifaning asosiy vazifasi saytga yuklangan eng so‘nggi
            ma’lumotlarni foydalanuvchi saytga kirgani zahoti tanishtirib
            borishdan iboratdir.
          </h3>
        </div>
        <h6>
          <Link to="/jadidlar">Jadidlar</Link> sandig'i
        </h6>
        <div className="foydalanuvchi_bolak bolak_9">
          <h3 className="bolak_title">
            {" "}
            Bosh sahifaning sandiqlar qatoridan “Jadidlar” sandig‘ini
            bosganimizda qidiruv bo‘limi undan pastda saytga yuklangan barcha
            jadidlarning dastlabgi ma’lumoti va rasmli ro‘yxati chiqib keladi.
            Quyiroqda esa oldingi va keyingi hamda istalgan sahifaga o‘tish
            imkoniyati mavjud.
          </h3>
          <h3 className="bolak_title">
            {" "}
            Istalgan jadidning rasmi yoki ismining ustiga bosganimizda yangi
            oyina ochiladi. Unda qidiruv maydoni va quyida jadidning o‘ziga
            tegishli Tarjimayi holi, Asarlari, Maqolalari, Sherlari, Estaliklar
            va Hikmatli so‘zlar deb nomlangan yangi bo‘limlar paydo bo‘ladi.{" "}
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/D3zAqQaF2FgcxxWwe4xNszYp7I5tTejnFpNy7MZz.jpg"
              alt=""
            />
          </div>
          <h3 className="abzats">
            {" "}
            Mazkur sandiqni eng ahamiyatli jihati har bir jadidning o‘ziga
            tegishli ma’lumotlar alohida tarzda berilgan bo‘lib, asarlari va
            maqolalarining joriy imloga o‘tkazilgan shaklida yuklangan.
          </h3>
        </div>
        <h6>
          <Link to="">Til va Imlo</Link> sandig'i
        </h6>
        <div className="foydalanuvchi_bolak bolak_10">
          <h3 className="bolak_title">
            {" "}
            Bosh sahifada sandiqlar qatorida “Til va imlo” sandig‘ini
            bosganimizda Til va imloga oid “Asarlar”, “Maqolalar” va “Hikmatlar”
            bo‘limlari paydo bo‘ladi. Ular bilan ishlash yuqorida ko‘rsatilgan
            “Jadidlar” sandig‘i bilan bir xil. “Til va imlo” sandig‘ida jadidlar
            tomonidan e’lon qilingan til va imloga oid asarlar va maqolalar eski
            o‘zbek yozuvidan joriy imloga o‘tkazilib saytga yuklangan.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/pCvYrgw6GAVMy5Lo7CCY2WbxpMzUTxsgX86nLwVu.jpg"
              alt=""
            />
          </div>
        </div>
        <h6>
          <Link to="">Manbalar</Link> sandig'i
        </h6>
        <div className="foydalanuvchi_bolak bolak_11">
          <h3 className="bolak_title">
            {" "}
            Bosh sahifadagi sandiqlar qatoridan “Manbalar” sandig‘ini
            bosganimizda “Arxiv hujjatlari”, "Matbuot" “Suratlar”, “Ko‘ruvlar”
            va “Eshituvlar” deb nomlangan bo‘limlar paydo bo‘ladi.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/ujdbSXlxaMCRz23pKeIowy9zgnJsjdLQt30ygoSv.jpg"
              alt=""
            />
          </div>
          <h3 className="abzats">
            {" "}
            “Arxiv hujjatlari” bo‘limida jadidchilikga oid arxiv hujjatlarining
            pdf shaklida joylangan ro‘yxati va skaner qilingan shakli chiqib
            keladi. "Matbuot" bo'limi ham o'z ichida bir necha sohalarga
            bo'lingan bo'lib ularda asosan matbuotda e'lon qilingan va joriy
            imloga o'tkazilgan maqolalar yuklangan. “Suratlar” bo‘limida
            jadidlar va ularning faoliyatiga oid rasmlar joylangan. Har bir rasm
            ustiga bosilganda galereya tarzida alohida oyina ochilib suratlar
            ketma-ketlikda namoyish etiladi. “Ko‘ruvlar” sandig‘ida jadidlar va
            ularning faoliyatiga oid videolar (youtube ijtimoiy tarmog‘idagi
            videolar ham) joylangan. “Eshituvlar” sandig‘ida esa jadidlar
            faoliyatiga bag‘ishlangan radioeshittirishlar va boshqa ovozli
            materiallar yuklangan. Bu sandiq ichidagi ma’lumotlarni yuklamasdan
            onlayn ko‘rish, o‘qish, va eshitish imkoniyati mavjud.{" "}
          </h3>
        </div>
        <h6>
          <Link to="">Izlanishlar</Link> sandig'i
        </h6>
        <div className="foydalanuvchi_bolak bolak_12">
          <h3 className="bolak_title">
            {" "}
            Bu sandiqda “Asarlar”, “Maqolalar”, “Dissertatsiyalar” va
            “Xotiralar” bo‘limlari paydo bo‘ladi va ular bilan ishlash yuqorida
            qayt etib o‘tilgan “Jadidlar” sandig‘i bilan bir xil. Bu sandiqda
            keyingi yillarda jadidchilik faoliyati haqida qilingan
            tadqiqotlarning natijalari asarlar, maqolalar va dissertatsiyalar
            shaklida yuklangan.{" "}
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/C2szzL7fudZqFdbeWAcl2mkTq1lRuXtuPywstRtJ.jpg"
              alt=""
            />
          </div>
        </div>
        <h6>
          <Link to="/turkiston_muxtoriyati">Turkiston Muxtoriyati</Link>{" "}
          sandig'i
        </h6>
        <div className="foydalanuvchi_bolak bolak_13">
          <h3 className="bolak_title">
            {" "}
            Bosh sahifadagi sandiqlar qatoridan “Turkiston muxtoriyati”
            sandig‘ini bosganimizda “Asarlar”, “Maqolalar”, “She’rlar” va
            “Xotiralar” bo‘limlari paydo bo‘ladi va ular bilan ishlar yuqorida
            qayd etib o‘tilgan “Jadidlar” bo‘limi bilan bir xil. “Turkiston
            muxtoriyati” sandig‘ida keyingi davrda Turkiston muxtoriyatiga
            tegishli tadqiqotlar bilan birgalikda XX asr boshlarida nashr
            etilgan gazeta va jurnallarda e’lon qilingan maqolalarning joriy
            imlodagi shakli yuklangan.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/o6uWrcShgSMLGRJopq8uV38LfUNNXcY7abugh9G4.jpg"
              alt=""
            />
          </div>
        </div>
        <h6>
          <Link to="">Voqealar </Link> sandig'i
        </h6>
        <div className="foydalanuvchi_bolak bolak_14">
          <h3 className="bolak_title">
            {" "}
            “Voqealar” sandig‘ida “Yangiliklar”, “Yig‘inlar” va “Seminarlar”
            bo‘limlari paydo bo‘ladi. “Yangiliklar” bo‘limida jadidchilikga oid
            so‘nggi yangiliklar berib boriladi va “Batafsil” tugmasini bosish
            orqali to‘liq ma’lumot olinadi. “Yig‘inlar” va “Seminarlar”
            sandiqlarida ishlash ham ushbu bo‘lim bilan bir xil hisoblanadi.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/w4z23EqswFBOj4Swp5sz9qyprLw8UYeTOWF5xGkZ.jpg"
              alt=""
            />
          </div>
        </div>
        <h6>
          <Link to="">Foydalanuvchiga </Link> sandig'i
        </h6>
        <div className="foydalanuvchi_bolak bolak_15">
          <h3 className="bolak_title">
            {" "}
            Mazkur sandiqda saytdan foydalanish tartibi va barcha bo‘limlar
            haqida batafsil ma’lumotlar beriladi.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/xGTkexVp7sa3QsRJO8tm022gFfe2aGs0WvNGTJbX.jpg"
              alt=""
            />
          </div>
        </div>
        <h6>
          <Link to="">Biz Haqimizda </Link> sandig'i
        </h6>
        <div className="foydalanuvchi_bolak bolak_14">
          <h3 className="bolak_title">
            {" "}
            Bosh sahifadagi “Biz haqimizda” sandig‘ini bosish orqali saytni
            yaratilishidan maqsad va g‘oyalar hamda sayt yaratuvchilarining
            ma’lumotlari berilgan.
          </h3>
          <div className="bolak_img">
            <img
              src="http://jadidlar.uz:2118/storage/uploads/file_manager/ZyMRIdjMDrBy8dMyQ9dW3zHzGFyFYD5LdPEg5Ew4.jpg"
              alt=""
            />
          </div>
        </div>
        <h3 className="abzats bolak_end">
          {" "}
          Eslatma: Sayt va undagi ma’lumotlar mualliflik huquqi bilan himoya
          qilingan bo‘lib, undan foydalanishda mualliflik huquqi qoidalarining
          buzulishiga yo‘l qo‘yilmaslik so‘raladi.
        </h3>
      </div>
    </div>
  );
}
