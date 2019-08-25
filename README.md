# NodeJs-Server
NodeJs Server
<h1>Local Makineda serviceleri çalıştırmak</h1>3
<ol>  
<li>	Commit reference kodu ile eski brach’i bitbucket’tan çekmek için aşağıdaki komut kullanılır.</li>
git checkout -b  <branch_name>  <commit_branch_reference_kodu>
<li>	Oluşturulan TAG ile eski repo’yu bitbucket’tan çekmek için aşağıdaki komut kullanılır.</li>
git checkout <Tag>
<li>	Cinar_pcf_common’ı derlemk için yaml sürümünü de çalışılacak sürüm yaml’larına geri almak gerekiyor.</li>
<li>	DEBIAN paketlerini çekmek için aşağıdaki komutlar cinar_box’ta koşturulur. </li>
apt-get update
sudo apt-get install <service_name>
<li>	Servis versionlarını öğrenmek için</li>
dpkg -l | grep < service_name >
<li>	PDU session create yapmak için çalıştırlan serviceler</li>
<ol>
<li>	NRF_SERVER</li>
<li>	PES       </li>
<li>	SMS       </li>
<li>	UDRSERVER </li>
</ol> 
</ol>
<ol> 
<h1>Cınar Sistem Test Ortamı(slice2PCF)</h1>
<li>	Gateway ortamı http2 desteğini sağlıyor.
<li>	CURL script’i test ortamında çalıştırmak için; PolicyRuleConfig.sh scriptinde “$4” ifadesi olan alanları “POLICY_CONFİG_PATH” ile değiştirilmesi gerekiyor. Daha sonra bu bash dosyası aşğaıdaki gibi çalıştırılması gerekiyor. Çalıştırıldıktan sonra Json paketleri MongoDB’ye yazılır. Bu işlem UI tamamlandıktan sonra UI üzerinde yapılacaktır.
./PolicyRuleConfig.sh <IP> <PORT> https
./PolicyRuleConfig.sh 10.10.21.106 7050 https
<li>	Gelen paketleri izlemek ve giden patketleri incelemek için TCPDUMP çalıştırılması gerekir.
sudo tcpdump -i any -w <filename.pcap>
<li>	Slice ortamında tcpdump dosyasını gateway ortamına almak için 
scp ubuntu@10.10.21.106/:<path/filename.pcap> /<gatreway_path>
<li>	Servis versionlarını öğrenmek için
dpkg -l | grep < service_name >
</ol>
<h1>Karşılaşılan Sorunlar</h1>
<ol> 
<li>Slice konfigürasyonu değiştirildi. Eskisi uygun değildi.								</li>
<li>DNN güncellendi.                                                                        </li>
<li>Test için TLS’ler false olarak ayarlandı                                                </li>
<li>Supi numarasının başıına “imsi-“ eki eklenerek “imsi-001000000042” olarak düzeltildi.   </li>
</ol>
