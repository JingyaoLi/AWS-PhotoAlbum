var jwt = require('jsonwebtoken');
var jwkToPem = require('jwk-to-pem');

var jwk = { "keys": [{ "alg": "RS256", "e": "AQAB", "kid": "XpWtB+ch/6cPombGK+Iw/yGvov3tHR1Ziqw2iKfNzv0=", "kty": "RSA", "n": "zEinECXYAMt4HLHFwMHG_h4Z55MfYhno3u0dhZi_7Cmp_wSWTrDxZaS3tv1Fp68E-c5i6IjgG6fiGs26tfEkv0A-IWzfAbFks8ZXlHzoJiuE2eaoeBEc_e2ZVWBc0DuQfUCX7ajcpgv3o2-K-Eccz3ysN3plH46umm9rzDxtWcIsXoZVYcGjSl6zl2FtoSdS_0U1vrlP_qIOHd1hqNt8CxbizSd_hzlJibqGBn0rqk1kwPlZcEDcXdxkSjgY_zOsud5r79QMQXMDQ789H-0R1qYpY3PI1hT-c2Z5HY8Xn6RDSXCs0VKq-T0eJxn5-MjRYFEUgzYSTa1DHmKhWZcuCw", "use": "sig" }, { "alg": "RS256", "e": "AQAB", "kid": "QF79BLTZqRHD4m7PFfC5WnVS70h8+/XmhqTXwYTNvbg=", "kty": "RSA", "n": "oUwDnZpmqN4NE5Ic7qCBHU_9qqQiZJyFlsCDqCmI3scLWakDTD4sjhJFuKjqpE4Sq-z5EFrm2_9U6pX-mucc1uRJOy7r_hw_J69aYK42Sg8gqcypLkA1YsHHa_mGtJlQQ24-_O3zlqtbDlceKeMaBKxN9hsKImCHjN_qJTJHbsJSQy0AZK72A3LsfkrAmyWcglng7lMNxcCauN7iCQhW8kGCATY6p4FOX3wd3Za_FTMcL78NIzeTUKOzKeM1KyetqEUlpPXBweNUWtU7Q1AtswXcX6DC_rkUawSoBtP1FbIge6aQDWccVx2Av9oCBtgvFt0UEsV7fR7XHn5gw9v5Jw", "use": "sig" }] }

// var pem = jwkToPem(jwk);



// var token = 'eyJraWQiOiJYcFd0QitjaFwvNmNQb21iR0srSXdcL3lHdm92M3RIUjFaaXF3MmlLZk56djA9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiOHVtcndyVDdhR21CcUl0Vk1vRzNWZyIsInN1YiI6IjdlY2ExYjZlLWJmOTEtNGMxYS1iZTAxLTAxYjQxNTA0MWZjNyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9kMVBLclFleVIiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiN2VjYTFiNmUtYmY5MS00YzFhLWJlMDEtMDFiNDE1MDQxZmM3IiwiYXVkIjoiN2kyaThnbjZlbDBwYjF2dXFyNGQzdGR1b2QiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU0MTkxMjQ5MCwicGhvbmVfbnVtYmVyIjoiKzE5Mjk0NTQ4NDk1IiwiZXhwIjoxNTQxOTE2MDkwLCJpYXQiOjE1NDE5MTI0OTAsImVtYWlsIjoiMjkxOTc4MzEzQHFxLmNvbSJ9.Sx6bTBX2cpKE8qbjkxWzhl2zyd8cxCfgOvA731OhaPBem_SuM4SA2ghvjMwmamFm6PDFVagvBtN9FnUqqjpHy9OlpLqOeanjXzNebjrOYDX_zHEgfhuY_O_Y6a0ayyTHcZYE8DxD1YPtSTE8O_VXA7aH5rSLTa9O_iLOg7xB6qf25c60BQcXCY1ziwTdv6KtmJNk2R5Wgx2dzDFneJsj0N0Lp0-n9Dysw7FIaS7fB1IroTcPNo0JEwlLXuMy3ArwyoGmT3XbS6gJiphFt7V3VK5fQUwp9oZoiKIfa0xm7u1CUbeV9E7rFSiqFES7P0c0t5J4HBI1LCQoYLcIiQKt1A&access_token=eyJraWQiOiJRRjc5QkxUWnFSSEQ0bTdQRmZDNVduVlM3MGg4K1wvWG1ocVRYd1lUTnZiZz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3ZWNhMWI2ZS1iZjkxLTRjMWEtYmUwMS0wMWI0MTUwNDFmYzciLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNTQxOTEyNDkwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9kMVBLclFleVIiLCJleHAiOjE1NDE5MTYwOTAsImlhdCI6MTU0MTkxMjQ5MCwidmVyc2lvbiI6MiwianRpIjoiY2JiODI1Y2ItZDk3ZS00MjM4LTk3OGMtNmI4NWJkYzM0NjhkIiwiY2xpZW50X2lkIjoiN2kyaThnbjZlbDBwYjF2dXFyNGQzdGR1b2QiLCJ1c2VybmFtZSI6IjdlY2ExYjZlLWJmOTEtNGMxYS1iZTAxLTAxYjQxNTA0MWZjNyJ9.gHaP7L1UMEG1TNv3TG384NSRissSOCpx-2tFr7xElvfk9AZ0ZNL-5v-OIE2aCytAGEQSOMVvuRTMUIymUkLugxunf12YyHNIQDfbyj6z0ewVlXtUMiYlPzFnfK6hQIMJ9Vj8h_H2fnrQPlKk_NLVjX_kBxPff_ZhMELVZzD4JKpN92tHB_-zRSO1VwJ0XKYkEllCGbh4Jo2KGauRG8UAScB0prcBas_JkrkAn9N3_NFHsd-srIBXHVcb4w7amoED-1UmXxIL4X5rRYE2V2q508hKUI1VR4bsrPCTd__JNqudqY4p9VIZbkYxaVWYPiIwcoY2diB9-RW2p9IJzPsKlA'

// jwt.verify(token, pem, { algorithms: ['RS256'] }, function (err, decodedToken) {
//     console.log(decodedToken);
// });
