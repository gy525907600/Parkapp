import { UserData } from "@/types/types";

export type UserInfo = UserData;

export class Storage {
  private key = 'user';

  setUserInfo(info: UserInfo): void {
    localStorage.setItem(this.key, JSON.stringify(info));
  }

  get userInfo(): UserInfo {
    try {
      const items = window.localStorage.getItem(this.key) as unknown as string;
      const data = JSON.parse(items);
      return data as unknown as UserInfo;
    } catch (error) {
      return { rego: '', paidHours: 0 };
    }
  }

  get rego(): string {
    return this.userInfo?.rego;
  }

  get paiHours(): number{
    return this.userInfo?.paidHours;
  }

  deleteUserInfo(): void {
    localStorage.removeItem(this.key);
  }
}


