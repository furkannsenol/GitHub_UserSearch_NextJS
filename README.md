
<h1>Gereksinimler</h1>
<p>1) Node.js : Bu adresten indirebilirsiniz https://nodejs.org/en/download/</p>
<p>2) React.js : Komut İstemci(cmd) ekranından   <b>npm i react</b>   yazarak framework ü kurabilirsiniz</p>
<p>3) Next.js : Komut İstemci(cmd) ekranından <b>npm i next </b>  yazarak framework ü kurabilirsiniz</p>
<p>4) Npm in Güncellenmesi: <b>npm install npm --global </b> </p>

<h1>Projenin çalıştırılması</h1>
<p> Komut istemci ile proje dosyasının bulunduğu dizine girilip <b> npm run dev </b> yazarak projeyi ayağa kaldırmış olursunuz. Daha sonra tarayıcından http://localhost:3000 adresine gidebilirsiniz </p>

<h1>Proje Hakkında</h1>
<p>Componentler -> Navbar ve Footer bileşenlerine ait tasarımlar bu klasör altında yer almaktadır.</p>
<p>Layout -> </p>

<p>Index.js -> Projenin ana sayfası olup, verilerin sayfalandırma mantığıyla listeleme yaptığı bir sayfadır. Resim veya kullanıcı adına tıklandığında URL ye usurname bilgisini ileterek detay sayfasına (http://localhost:3000/user/userName) geçer.</p>

<p>User Klasörü/ index.js (http://localhost:3000/user/) -> Kullancıdan username bilgisini text den alarak URL ye usurname bilgisini iletir.</p>

<p>User Klasörü/[userName].js (http://localhost:3000/user/furkannsenol) -> URL deki parametreyi okuyup kullanıcıya ait bilgileri görüntülenmesini sağlar.</p>

<h1>Alınan Önlemler</h1>
 <p> - API den kaynaklı oluşan hataların önüne geçilerek projenin çökmemesi sağlandı</p>
  <p>- Kayıtlı username olmadığı zaman 404 bilgisi gösterilmiştir</p>

<p align="center">
  <h1>Home Screen - Pagination(Total 80 data) </h1>
  <img src="https://user-images.githubusercontent.com/36533867/220442877-ea82deb7-edeb-49cb-b228-8f9ddb72dd9f.png"  >
  <h1>Search Screen</h1>
  <img src="https://user-images.githubusercontent.com/36533867/220442873-0b49996e-b545-49f9-9db5-bd02e6b0eb8e.png"  >
  <h1>User Detail Screen</h1>
  <img src="https://user-images.githubusercontent.com/36533867/220442879-6c297277-aae3-432a-a805-b3a05c46c919.png"  >
  <h1>API ERROR </h1>
