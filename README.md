# javascript-settimeout
Yukarıdaki JS kod örneğinde cikis isimli fonksiyonun 60 sn sonra çalışması için X ile gösterilen yere hangi fonksiyon gelmelidir? 

A ) setTimeout 

B ) id 

C ) clearTimeout 

D ) document.getElementById 

E ) setInterval 

JS kodları belirli bir zamanda çalışmak üzere ayarlanabilir. 
Bu işleme zamanlanmış görev denmektedir. 
İlk zamanlanmış görev verilen kodları bir zaman aralığından sonra (ör: 10sn) işletir. 
Bu amaçla setTimeout fonksiyonu kullanılır. 
Bu fonksiyona parametre olarak işletilecek kodları içeren bir fonksiyon ve milisaniye cinsinden bekleme süresi verilir. 



JS’de bir elementin görüntüsü nasıl değiştirilir? Cevap: JS sayfadaki bir elementin CSS stillerini değiştirebilir. Örneğin, sitemizin okunmasını kolaylaştırmakiçin gece ve gündüz saatlerinde iki renk temasıyla sunmak istediğinizi düşünelim. Gece saatlerinde çokparlak ekranlar gözleri yoracağından koyu bir artalan üzerinde parlak yazılar; gündüz saatlerinde de tamtersi bir tema kullanalım. Bu amaçla sitemize gece/gündüz temaları arasında geçiş yapmak için bir düğmeekleyebiliriz. Hatta, JS düğmeler yerine, bilgisayarın sistem saatini kontrol ederek bu geçişleri otomatikolarak da gerçekleştirebilir. Resim 4.5’te sayfa üzerindeki düğme ile koyu ve açık renk temaları arasındakigeçiş sağlanmaktadır. Bu işlemi bilgisayarın sistem saatine göre yapmak için Tarih nesnesi başlığındakifonksiyonlar kullanılabilir.JS DOM üzerinden tarayıcıdaki sayfaya erişebildiği gibi, BOM (Browser Object Model – Tarayıcı NesneModeli) üzerinden tarayıcı kaynaklarına da erişebilir. JS, BOM kullanarak: (1) yeni bir tarayıcı penceresi açabilir, (2) tarayıcı penceresini düzenleyebilir (ekrandaki yeri ya da boyutlarını değiştirebilir), (3) tarayıcı penceresini kapatabilir, (4) kullanıcının ekranı hakkında bilgi alabilir (boyutlar, renk derinliği vb.), (5) gösterilen sayfa hakkında bilgi alabilir, (6) gösterilen sayfayı değiştirebilir, (7) tarayıcının tarih nesnesine erişerek önceki/sonraki sayfalara gidebilir, (8) kullanıcı bilgisayarına çerez bırakabilir, (9) zamanlanmış görevler oluşturabilir, (11) tarayıcı uygulaması hakkında bilgi alabilir, (12) tarayıcının uyarı ve alarm kutularını kullanabilir.  


JS’de zamanlanmış görev nasıl kullanılır? Cevap: JS zamanlayıcı (Timer) nesnesini kullanarak zamanlanmış görev oluşturabilir ya da bir olayın aralıklarla tekrarlanmasını sağlayabilir. Örneğin bir sınav uygulaması oluşturduğumuzu düşünelim. Bu uygulamada her sorunun yanıtlanması için kullanıcıya 30 saniye verilsin. 30 saniye sonunda kullanıcının soruyu yanıtlamasınıengellemek için zamanlanmış görevleri kullanabiliriz. Saniyede bir kere çalışacak zamanlanmış görev ile sayfadaki bir sayaç güncellenerek, zamanın bitişinde formu gönderecek olan düğmenin etkileşimi kaldırılabilir.Resim 4.7’de solda zamanlanmış görevin çalışması ve sayacı güncellemesi görülmektedir. Sağ tarafta ise sürenin bitmesi durumunda formu gönderecek düğmenin aktifliği kaldırılmaktadır.

-

Verilen kodları belirli zaman aralıklarıyla (ör: her saniye) sürekli işletmek amacıyla aşağıdaki metotlardan hangisi kullanılır? 
A ) setInterval 

B ) setTimeout 
C ) getSeconds 
D ) getTime 
E ) getMilliseconds 

Çözüm : JS kodları belirli bir zamanda çalışmak üzere  ayarlanabilir. Bu isleme zamanlanmış görev denmektedir. JS iki tür zamanlanmış görev desteklemektedir. İlk zamanlanmış görev verilen kodları bir zaman aralığından sonra (ör: 10sn) işletir. Bu amaçla setTimeout fonksiyonu kullanılır. İkinci zamanlanmış görev türü, verilen kodları belirli zaman aralıklarıyla (ör: her saniye) sürekli işletir. Bu amaçla setInterval fonksiyonu kullanılır. 
Doğru cevap A şıkkıdır.  

-
