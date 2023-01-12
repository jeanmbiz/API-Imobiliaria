import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  district: string;

  @Column({ type: "varchar", length: 8 })
  zipCode: string;

  @Column({ type: "varchar", nullable: true })
  number?: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ length: 2 })
  state: string;
}

export default Addresses;
