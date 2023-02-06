export class GetUserRequest {
  constructor(public readonly userId: string) {}

  toString(): string {
    return JSON.stringify({
      userId: this.userId,
    });
  }
}
