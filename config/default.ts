export default {
  port: 1337,
  dbUri: "mongodb://127.0.0.1:27017",
  saltWorkFactor: 10,
  accessTokenTtl: "15y",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDcJlbA44pEscaecHXyiwvcsfwS11zC7DVsowqsXqYsQscLje8N
6HMe64kTWNHN5zMJYbTSS2StNMtx2YYU+dS5j8+4V/hkeZqrTb7Nc3C7veA7zwjl
u6wdTiI0g8reiyGMre7I9K8LB/Y/9+1Sju0pKw54sl0Nvf+eedlPCnS6lQIDAQAB
AoGBAM5CdWF/TlqSHT7wqvE1aUW61Ctq75QI7vz7vNJGU3aAkjC3KFRlhwZfMyyX
OOqrRNvzWRD2ZjsJjdr7LG6Wq7/6frTuldI0f0KNZquaC/PkEcoMQHS4ooRyQqcW
cRK/NqFUbHIdc9Fu/WyNcfOfTwEUNTmt/lSCVJakOPo52FqBAkEA9F0XAhZwdks1
2D38JRsjyYuT7LF+GKboEoApHXmzafzIXvG2NyWxeE9MPdJ2Wye8VAcB4fXe1yZD
6IiZmptzkQJBAOaiEf3O8CjCwlQrTVzx+3L+YqH/4UYuyZixvYN8A9h8D2rSyVZK
I/D3lC5Q/Tvscprqa++DkLnmZkNeX6fKDMUCQBddFygR8Sq+QiWst4DsuV05xSjq
R34f5yxtqICy9B58FsRNI/jd17wDCO0YREyu3ejCysFJ+sZjWDbRaK5JkqECQFzw
ruNjAzDJ21nj4Vc1RKlAjirOXM/VhvP7nG1iCoKw692WeABH/FfczWAkzwfY7w4y
rbBlimr/x/IaE94f9CkCQQCXLn4m5umEgbL2JYgiB3zm7/NUcqm9r/uoxoKE/7np
P671jJGQNduiMw6YMKbO0VIxZew5Y2lx0i89ZCyI50e0
-----END RSA PRIVATE KEY-----`,
  accessTokenPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDcJlbA44pEscaecHXyiwvcsfwS
11zC7DVsowqsXqYsQscLje8N6HMe64kTWNHN5zMJYbTSS2StNMtx2YYU+dS5j8+4
V/hkeZqrTb7Nc3C7veA7zwjlu6wdTiI0g8reiyGMre7I9K8LB/Y/9+1Sju0pKw54
sl0Nvf+eedlPCnS6lQIDAQAB
-----END PUBLIC KEY-----`,
  refreshTokenPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgHR2XEbAFFbD8EXjH7B0uz9yz0j5JJ5/398Zu3ZzoG5hmG/DesGk
8pH7XIn6kvpNqihsAPD3FPoWImMo1PD0WsIoK2WaHHE+6bTGLMOwaw1CvFWnZv9b
Muuo/9aamWQiQiwhy153uDmAUgF+k+joAWOMCHRj1HT6FUM1Zq++sYLXAgMBAAEC
gYArYoRRnvB0uh1iC5Acjf/LTRvHFXj8yqo9VDqvj7duJ1FAIVQzmxz6IOeCRyRF
tnTzBfj7yy+3UlORGP7qnDzKn54OrY8bTza2wl2V2/mMRA+qR4bX82OuHUnddOzh
YlDnDtRPy5+3uoGgM4GBityAtsW9He/PLieq3NnUhQupkQJBANdH1IrlW5uwSvbT
8plw21Vy5RKFj1kym22ONS9XFoJZuZhwcSOa1MeFZcGtJmnTBSZd8DAEy8NFizHo
wiRf2l0CQQCKfZ7nmiUnOBenKWssKjJJmr40sXXFxlULpl3Boyrs1CdLGOGLEMEe
ynDcMa4gKkNEe/tNqM9XPtuDWSvr0AbDAkEAmhYzrubTVvAr99dkQSdiFhsSkts9
6x4p2ZR7xNKUreAC03VHxbBAtD5qwuFoKT585SU/kV8daTsRkjuDGf3xkQJAI1/b
CwWQn+fwAr7NpUZR+gMQupzpnE8Awi0IncFz4XJ/ZutAESmCar8C/PujooupCwEw
O7H25C4mG/LXCTDlyQJBAKSzsP+Ofk1eMixqskKopSJsviFGJefeFLO3iCkn2Ctp
ua8FQ35h3RBKSJK1Rdp2yoW2GKsZirq+hER5BEf1pOA=
-----END RSA PRIVATE KEY-----`,
  refreshTokenPublicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHR2XEbAFFbD8EXjH7B0uz9yz0j5
JJ5/398Zu3ZzoG5hmG/DesGk8pH7XIn6kvpNqihsAPD3FPoWImMo1PD0WsIoK2Wa
HHE+6bTGLMOwaw1CvFWnZv9bMuuo/9aamWQiQiwhy153uDmAUgF+k+joAWOMCHRj
1HT6FUM1Zq++sYLXAgMBAAE=
-----END PUBLIC KEY-----`,
};