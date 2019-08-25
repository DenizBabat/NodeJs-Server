# NodeJs-Server
NodeJs Server
<h1>Local Makineda serviceleri çalıştırmak</h1>
1)	Commit reference kodu ile eski brach’i bitbucket’tan çekmek için aşağıdaki komut kullanılır.
git checkout -b  <branch_name>  <commit_branch_reference_kodu>
2)	Oluşturulan TAG ile eski repo’yu bitbucket’tan çekmek için aşağıdaki komut kullanılır.
git checkout <Tag>
3)	Cinar_pcf_common’ı derlemk için yaml sürümünü de çalışılacak sürüm yaml’larına geri almak gerekiyor.
4)	DEBIAN paketlerini çekmek için aşağıdaki komutlar cinar_box’ta koşturulur.
apt-get update
sudo apt-get install <service_name>
5)	Servis versionlarını öğrenmek için
dpkg -l | grep < service_name >
6)	PDU session create yapmak için çalıştırlan serviceler
a.	NRF_SERVER
b.	PES
c.	SMS
d.	UDRSERVER
<h1>Cınar Sistem Test Ortamı(slice2PCF)</h1>
1)	Gateway ortamı http2 desteğini sağlıyor.
2)	CURL script’i test ortamında çalıştırmak için; PolicyRuleConfig.sh scriptinde “$4” ifadesi olan alanları “POLICY_CONFİG_PATH” ile değiştirilmesi gerekiyor. Daha sonra bu bash dosyası aşğaıdaki gibi çalıştırılması gerekiyor. Çalıştırıldıktan sonra Json paketleri MongoDB’ye yazılır. Bu işlem UI tamamlandıktan sonra UI üzerinde yapılacaktır.
./PolicyRuleConfig.sh <IP> <PORT> https
./PolicyRuleConfig.sh 10.10.21.106 7050 https
3)	Gelen paketleri izlemek ve giden patketleri incelemek için TCPDUMP çalıştırılması gerekir.
sudo tcpdump -i any -w <filename.pcap>
4)	Slice ortamında tcpdump dosyasını gateway ortamına almak için 
scp ubuntu@10.10.21.106/:<path/filename.pcap> /<gatreway_path>
5)	Servis versionlarını öğrenmek için
dpkg -l | grep < service_name >
<h1>Karşılaşılan Sorunlar</h1>
1)	Slice konfigürasyonu değiştirildi. Eskisi uygun değildi.
2)	DNN güncellendi.
3)	Test için TLS’ler false olarak ayarlandı
4)	Supi numarasının başıına “imsi-“ eki eklenerek “imsi-001000000042” olarak düzeltildi.
