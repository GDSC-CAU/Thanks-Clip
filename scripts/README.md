# scripts

> aws 셋업을 위한 script 목록

1.  **deploy**
2.  **increase**
3.  **destroy**

# AWS 셋업

## 환경 변수 셋업

1. **Remotion 공식 사이트**에서 [2부터 6까지 진행](https://www.remotion.dev/docs/lambda/setup#2-create-role-policy)
2. 이후 `.env.example` 확인
    ```bash
    AWS_KEY_1=키를_적어주세요
    AWS_SECRET_1=스크릿_키를_적어주세요
    ```
3. 해당 키를 `.env`에 기입
    > **주의 🔫**
    >
    > **절대로 환경변수를 commit하지 마세요! 요금 폭탄 천만원을 맞고 쓰러질 수 있습니다.**

## 첫번째, `deploy.js`

```bash
pnpm aws:deploy
```

1. aws `lambda` remotion 렌더링 함수를 배포
2. aws `s3 bucket` 배포 -> 동영상 파일을 다운로드 할 수 있게 가상의 홈페이지를 만들어 줌 / 일종의 원격 저장소

### 핵심

**`s3 bucket`** = 배스킷, 즉 데이터를 담는 공간(aws 사용량 만큼 금액 지불)

`remotion` ~ 비디오 렌더링 = 많은 함수 호출, 일련의 비용이 발생할 수 있음, 캐싱 전략 고려

> **최대한 많은 지역과 계정에 배포**
>
> 과부하 감소 및 데이터 분산 ~ 비용 절감

## 두번째 `increase.js`

```bash
pnpm aws:increase
```

-   aws `lambda`함수, **concurrency limit을** `1000`으로 늘리는 요청 진행
-   동영상 인코딩 시, 동시 작업량 1000으로 증가 / 기본 = 10

> 다소 지연이 될 수 있음, 빠르면 30분, 늦으면 3시간 정도

## 옵션, `destroy.js`

```bash
pnpm aws:destroy
```

배포된 s3 bucket을 모두 제거

배포 s3 링크 예시 https://aws.amoazon.//some.../other.../out.mp4

1. 해당 링크로 비디오를 다운 받던 사용자, 더 이상 해당 비디오를 다운 일이 없어짐
2. 링크가 쓸모가 없어짐
3. 데이터 초기화

# local

`.env` 환경 변수를 모을 필요가 없음 / 과도한 트레픽 X

# deploy

**`Next.js` + `vercel` -> aws 계정을 모두 기입**
