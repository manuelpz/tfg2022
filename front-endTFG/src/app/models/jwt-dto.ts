export class JwtDTO {

  token: string;
  trype: string;
  nombreusuario: string;
  authorities: string[];

  constructor(token: string, trype: string, nombreusuario: string, authorities: string[]) {
    this.token = token;
    this.trype = trype;
    this.nombreusuario = nombreusuario;
    this.authorities = authorities;
  }
}
