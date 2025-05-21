// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Users & Document;

@Schema()
export class Users {
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    created_at: string;
}


export const UsersSchema = SchemaFactory.createForClass(Users);
