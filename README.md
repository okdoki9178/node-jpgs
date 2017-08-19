##### jpgs (node image service)

#### 주요 기능
+ node 기반의 이미지 서버

#### TODO
+ 썸네일 처리
+ FTP 지원
+ cloud storage 지원
+ api키 발급
+ 단축 URL 서비스

#### 라이선스
아직 미정

#### node 실행
```shell
git clone jpgs
cd jpgs
npm install
npm run start
```

#### docker 실행
```shell
docker run --name some-image --link some-mysql:db -d jpgs
```
