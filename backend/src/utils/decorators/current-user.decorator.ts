import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../../users/dto';

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    return { id: request.user.id, email: request.user.email };
  },
);
