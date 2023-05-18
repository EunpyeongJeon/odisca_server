import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { PaymentsService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CreatePaymentInput } from './dto/create-payment.input';
import { IContext } from 'src/common/interfaces/context';
import { create } from 'domain';

@Resolver()
export class PaymentsResolver {
  constructor(
    private readonly paymentsService: PaymentsService, //
  ) {}

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Payment)
  createLoginPayment(
    @Args('createPaymentInput') createPaymentInput: CreatePaymentInput,
    @Context() context: IContext,
  ): Promise<Payment> {
    const user = context.req.user;
    const point = createPaymentInput.point;
    const studyCafeId = createPaymentInput.studyCafeId;
    const seatId = createPaymentInput.seatId;
    const time = createPaymentInput.time;
    return this.paymentsService.createLoginPayment({
      point,
      time,
      user,
      studyCafeId,
      seatId,
    });
  }
}
