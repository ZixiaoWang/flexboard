export interface RoutePage {
    path?: string,
    rest?: string,
    exact?: boolean,
    children?: any,
}
export interface UserAccout {
    iss: string,
    nbf: number,
    aud: string,
    sub: string,
    hd: string,
    email: string,
    email_verified: boolean,
    azp: string,
    name: string,
    picture: string,
    given_name: string,
    family_name: string,
    iat: number,
    exp: number,
    jti: string,
}

export interface GoogleSignInResponse {
    clientId: string,
    credential: string,
    select_by: string,
}

export interface SeedArticleItem {
    index: number,
    title: string,
    date: string,
    source: string,
    url: string,
    thumbnail: string | null,
    detailurl: string | null,
}

export interface SeedResponse {
    articles: Array<SeedArticleItem>
}
