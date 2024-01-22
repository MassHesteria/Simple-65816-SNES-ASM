type Keyword = {
  name: string;
  description: string;
  allowLength?: boolean;
}

type StringObject = {
  [key: string]: string
}

const asm: { syntax: Keyword[]; opcodes: Keyword[]; docs: StringObject } = {
  syntax: [
    {
      name: "arch",
      description: `Architecture  [65816=default,spc700,spc700-inline,superfx]`,
    },
    {
      name: "defaultslot",
      description: "",
    },
    {
      name: "slotsize",
      description: "",
    },
    {
      name: "slot",
      description: "",
    },
    {
      name: "id",
      description: "",
    },
    {
      name: "name",
      description: "",
    },
    {
      name: "slowrom",
      description: "",
    },
    {
      name: "lorom",
      description: "",
    },
    {
      name: "hirom",
      description: "",
    },
    {
      name: "cartridgetype",
      description: "",
    },
    {
      name: "romsize",
      description: "",
    },
    {
      name: "sramsize",
      description: "",
    },
    {
      name: "country",
      description: "",
    },
    {
      name: "licenseecode",
      description: "",
    },
    {
      name: "version",
      description: "",
    },
    {
      name: "cop",
      description: "",
    },
    {
      name: "brk",
      description: "",
    },
    {
      name: "abort",
      description: "",
    },
    {
      name: "nmi",
      description: "",
    },
    {
      name: "irq",
      description: "",
    },
    {
      name: "reset",
      description: "",
    },
    {
      name: "irqbrk",
      description: "",
    },
    {
      name: "semifree",
      description: "",
    },
    {
      name: "header_off",
      description: "",
    },
    {
      name: "force",
      description: "",
    },
  ],
  opcodes: [
    {
      name: "ADC",
      description: "Add with Carry",
      allowLength: true
    },
    {
      name: "AND",
      description: "AND Accumulator",
      allowLength: true
    },
    {
      name: "ASL",
      description: "Accumulator Shift Left",
    },
    {
      name: "BCC",
      description: "Branch if Carry Clear",
    },
    {
      name: "BCS",
      description: "Branch if Carry Set",
    },
    {
      name: "BEQ",
      description: "Branch if Equal",
    },
    {
      name: "BIT",
      description: "Bit Test",
      allowLength: true,
    },
    {
      name: "BMI",
      description: "Branch if Minus",
    },
    {
      name: "BNE",
      description: "Branch if Not Equal",
    },
    {
      name: "BPL",
      description: "Branch if Plus",
    },
    {
      name: "BRA",
      description: "Branch Always",
    },
    {
      name: "BRK",
      description: "Software Break",
    },
    {
      name: "BRL",
      description: "Branch Always Long",
    },
    {
      name: "BVC",
      description: "Branch if Overflow Clear",
    },
    {
      name: "BVS",
      description: "Branch if Overflow Set",
    },
    {
      name: "CLC",
      description: "Clear Carry flag",
    },
    {
      name: "CLD",
      description: "Clear Decimal flag",
    },
    {
      name: "CLI",
      description: "Clear Interrupt flag",
    },
    {
      name: "CLV",
      description: "Clear Overflow flag",
    },
    {
      name: "CMP",
      description: "Compare Accumulator",
      allowLength: true,
    },
    {
      name: "COP",
      description: "Coprocesssor Empowerment",
    },
    {
      name: "CPX",
      description: "Compare X",
      allowLength: true,
    },
    {
      name: "CPY",
      description: "Compare Y",
      allowLength: true,
    },
    {
      name: "DEC",
      description: "Decrease Accumulator",
      allowLength: true,
    },
    {
      name: "DEX",
      description: "Decrease X",
    },
    {
      name: "DEY",
      description: "Decrease Y",
    },
    {
      name: "EOR",
      description: "Exclusive OR Accumulator",
    },
    {
      name: "INC",
      description: "Increase Accumulator",
      allowLength: true,
    },
    {
      name: "INX",
      description: "Increase X",
    },
    {
      name: "INY",
      description: "Increase Y",
    },
    {
      name: "JML",
      description: "Jump Long",
    },
    {
      name: "JMP",
      description: "Jump",
      allowLength: true,
    },
    {
      name: "JSL",
      description: "Jump to Subroutine Long",
    },
    {
      name: "JSR",
      description: "Jump to Subroutine",
      allowLength: true,
    },
    {
      name: "LDA",
      description: "Load Accumulator",
      allowLength: true
    },
    {
      name: "LDX",
      description: "Load X",
      allowLength: true
    },
    {
      name: "LDY",
      description: "Load Y",
      allowLength: true
    },
    {
      name: "LSR",
      description: "Logical Shift Right",
      allowLength: true,
    },
    {
      name: "MVN",
      description: "Move Negative",
    },
    {
      name: "MVP",
      description: "Move Positive",
    },
    {
      name: "NOP",
      description: "No Operation",
    },
    {
      name: "ORA",
      description: "OR Accumulator",
      allowLength: true,
    },
    {
      name: "PEA",
      description: "Push Effective Address",
      allowLength: true,
    },
    {
      name: "PEI",
      description: "Push Effective Indirect address",
    },
    {
      name: "PER",
      description: "Push program counter Relative",
    },
    {
      name: "PHA",
      description: "Push Accumulator",
    },
    {
      name: "PHB",
      description: "Push Bank",
    },
    {
      name: "PHD",
      description: "Push Direct page",
    },
    {
      name: "PHK",
      description: "Push program bank",
    },
    {
      name: "PHP",
      description: "Push Processor status flags",
    },
    {
      name: "PHX",
      description: "Push X",
    },
    {
      name: "PHY",
      description: "Push Y",
    },
    {
      name: "PLA",
      description: "Pull Accumulator",
    },
    {
      name: "PLB",
      description: "Pull Bank",
    },
    {
      name: "PLD",
      description: "Pull Direct page",
    },
    {
      name: "PLP",
      description: "Pull Processor status flags",
    },
    {
      name: "PLX",
      description: "Pull X",
    },
    {
      name: "PLY",
      description: "Pull Y",
    },
    {
      name: "REP",
      description: "Reset Processor status",
    },
    {
      name: "ROL",
      description: "Rotate Left",
      allowLength: true,
    },
    {
      name: "ROR",
      description: "Rotate Right",
      allowLength: true,
    },
    {
      name: "RTI",
      description: "Return from Interrupt",
    },
    {
      name: "RTL",
      description: "Return from subroutine Long",
    },
    {
      name: "RTS",
      description: "Return from Subroutine",
    },
    {
      name: "SBC",
      description: "Subtract with Carry",
      allowLength: true,
    },
    {
      name: "SEC",
      description: "Set Carry flag",
    },
    {
      name: "SED",
      description: "Set Decimal flag",
    },
    {
      name: "SEI",
      description: "Set Interrupt flag",
    },
    {
      name: "SEP",
      description: "Set Processor status",
    },
    {
      name: "STA",
      description: "Store Accumulator",
      allowLength: true,
    },
    {
      name: "STP",
      description: "Stop the clock",
    },
    {
      name: "STX",
      description: "Store X",
      allowLength: true,
    },
    {
      name: "STY",
      description: "Store Y",
      allowLength: true,
    },
    {
      name: "STZ",
      description: "Store Zero",
      allowLength: true,
    },
    {
      name: "TAX",
      description: "Transfer Accumulator to X",
    },
    {
      name: "TAY",
      description: "Transfer Accumulator to Y",
    },
    {
      name: "TCD",
      description: "Transfer Accumulator to Direct page",
    },
    {
      name: "TCS",
      description: "Transfer Accumulator to Stack pointer",
    },
    {
      name: "TDC",
      description: "Transfer Direct page to Accumulator",
    },
    {
      name: "TRB",
      description: "Test and Reset Bit",
    },
    {
      name: "TSB",
      description: "Test and Set Bit",
    },
    {
      name: "TSC",
      description: "Transfer Stack pointer to Accumulator",
    },
    {
      name: "TSX",
      description: "Transfer Stack pointer to X",
    },
    {
      name: "TXA",
      description: "Transfer X to Accumulator",
    },
    {
      name: "TXS",
      description: "Transfer X to Stack pointer",
    },
    {
      name: "TXY",
      description: "Transfer X to Y",
    },
    {
      name: "TYA",
      description: "Transfer Y to Accumulator",
    },
    {
      name: "TYX",
      description: "Transfer Y to X",
    },
    {
      name: "WAI",
      description: "Wait for Interrupt",
    },
    {
      name: "WDM",
      description: "William David Mensch",
    },
    {
      name: "XBA",
      description: "Exchange B and A",
    },
    {
      name: "XCE",
      description: "Exchange Carry and Emulation bit",
    },
  ],
  docs: {
    "LDA LDX LDY STA STX STY STZ":
      "LDA, LDX, and LDY load data into the accumulator, X register, and Y register, respectively. STA, STX, STY, STZ store the accumulator, the X register, the Y register, and zero into the memory location specified by the operand. Note that no registers are affected by STZ. \n\nWhen the m flag is 0, LDA, STA, and STZ are 16-bit operations, and when the m flag is 1, LDA, STA, and STZ are 8-bit operations. When the x flag is 0, LDX, LDY, STX, and STY are 16-bit operations, and when the x flag is 1, LDX, LDY, STX, and STY are 8-bit operations. \n\nFor LDA, LDX, LDY, the n flag is 0 when the high bit of the result is 0, and 1 when the high bit of the result is 1; the z flag is 1 when the result is zero, and 0 when the result is nonzero. \n\nExample: If the m flag is 0, and \n\n*   $123456 contains $AB \n\n*   $123457 contains $CD \n\nthen after a LDA $123456 \n\n*   the accumulator will be $CDAB \n\n*   the n flag will be 1 \n\n*   the z flag will be 0",
    "ADC SBC":
      "ADC and SBC add to, and subtract from, the accumulator. When the m flag is 0, it is a 16-bit operation, and when the m flag is 1, it is an 8-bit operation. When the d flag is 0, binary arithmetic is used, and when the d flag is 1, BCD arithmetic is used. Note that like the NMOS 6502, but unlike the 65C02, decimal mode (i.e. when the d flag is 1) takes no additional cycles. \n\nThe formula for ADC is: \n\n*   accumulator = accumulator + data + carry \n\nThe formula for SBC can be written several ways; one way is: \n\n*   accumulator = accumulator - data - 1 + carry \n\nIn other words, the formula is accumulator = accumulator - data - 1 when the carry (i.e. the c flag) is 0, and accumulator = accumulator - data when the carry is 1. \n\nWhen the d flag is 0: \n\n*   The n flag is 0 when the high bit of the result (bit 15 when the m flag is 0, bit 7 when the m flag is 1) is 0, and the n flag is 1 when the high bit of the result is 1. \n\n*   The v flag is 0 when there is not a signed arithmetic overflow, and the v flag is 1 when there is a signed arithmetic overflow. For 8-bit signed numbers, $00 to $7F represents 0 to 127, and $80 to $FF represents -128 to -1; an 8-bit arithmetic overflow occurs when the result is outside the range -128 to 127. For 16-bit signed numbers, $0000 to $7FFF represents 0 to 32767, and $8000 to $FFFF represents -32768 to -1; a 16-bit arithmetic overflow occurs when the result is outside the range -32768 to 32767. \n\n*   The z flag is 0 when the 16-bit (when m flag is 0) or 8-bit (when the m flag is 1) result is nonzero, and the z flag is 1 when the result is zero. \n\n*   The c flag is 0 when there is not an unsigned carry, and the c flag is 1 when there is an unsigned carry. For 8-bit unsigned numbers, $00 to $FF represents 0 to 255; for addition, an 8-bit carry occurs when the result is greater than 255. For 16-bit unsigned numbers, $0000 to $FFFF represents 0 to 65535; for addition, an 16-bit carry occurs when the result is greater than 65535. For subtraction (8-bit or 16-bit), there is a carry when the accumulator is greater than or equal to the data. \n\nWhen the d flag is 1, the n, z, and c flags have the same meaning (i.e. the n flag reflects the high bit of the result, the z flag indicates when the result is zero, and the carry indicates when the result is outside the range 0 to 9999). The v flag is overwritten, but BCD is really an unsigned representation, so the v flag can be considered invalid, since it does not represent a signed arithmetic overflow. \n\nExample 1: If the accumulator is $0001, the m flag is 0, the d flag is 0, and the c flag is 1, then after SBC #$2003 \n\n*   the accumulator will be $DFFE \n\n*   the n flag will be 1 \n\n*   the v flag will be 0 \n\n*   the z flag will be 0 \n\n*   the c flag will be 0 \n\nExample 2: If the accumulator is $0001, the m flag is 0, the d flag is 1, and the c flag is 1, then after SBC #$2003 \n\n*   the accumulator will be $7998 \n\n*   the n flag will be 0 \n\n*   the z flag will be 0 \n\n*   the c flag will be 0",
    "CMP CPX CPY":
      "CMP, CPX, and CPY compare the accumulator, X register, and Y register (respectively) to the data. CMP is a 16-bit comparison when the m flag is 0, and an 8-bit comparison when the m flag is 1. CPX and CPY are 16-bit comparisons when the x flag is 0, and 8-bit comparisons when the x flag is 1. \n\nCMP is similar to SBC, except: \n\n*   A. It is always a binary subtraction (i.e. SBC as though the d flag was 0) \n\n*   B. It does not include the carry in the formula (i.e. register - data; in other words, SBC as though the carry was set before the SBC) \n\n*   C. The v flag is not affected \n\n*   D. The result is only reflected in the n, z, and c flags; the accumulator, X register, and Y register are left unchanged. \n\nLikewise for CPX and CPY, except the X and Y registers, respectively, are used instead of the accumulator. \n\n*   The n flag reflects the high bit of the result. \n\n*   The z flag reflects whether the result is zero. \n\n*   The c flag is 0 when the register (accumulator, X register, or Y register) is less than the data, and the c flag is 1 when the register is greater than or equal to the data. \n\nExample: If the accumulator is $1234 and the m flag is 0, then after CMP #$1234 \n\n*   The n flag will be 0 \n\n*   The z flag will be 1 \n\n*   The c flag will be 1",
    "DEC DEX DEY INC INX INY":
      "DEC, DEX, and DEY decrement (i.e. subtract 1 from) and INC, INX, and INY increment (i.e. add 1 to) a register or the data. \n\nDEX, DEY decrement the X and Y registers respectively, and INX and INY increment the X and Y registers respectively. DEX, DEY, INX, and INY are 16-bit operations when the x flag is 0 and 8-bit operations when the x flag is 1. \n\nFor accumulator addressing, DEC and INC decrement and increment the accumulator; for all other addressing modes, DEC and INC decrement and increment the data (at the memory location specified by the addressing mode) and the accumulator is not affected. DEC and INC are 16-bit operations when the m flag is 0 and 8-bit operations when the m flag is 1. \n\nAssemblers may require or permit the following syntaxes for accumulator addressing for DEC and INC \n\n*   DEA \n\n*   DEC \n\n*   DECA \n\n*   DEC A \n\n*   INA \n\n*   INC \n\n*   INCA \n\n*   INC A \n\nFor this reason, in some assemblers, the label A is reserved and cannot be used in source code. \n\nFor all 6 instructions: \n\n*   The n flag reflects the high bit of the result. \n\n*   The z flag reflects whether the result is zero. \n\nExample: If the X register is $7FFF and the x flag is 0, then after INX \n\n*   the X register will be $8000 \n\n*   the n flag will be 1 \n\n*   the z flag will be 0",
    "AND EOR ORA":
      "AND, EOR, and ORA bitwise And, bitwise Exclusive-Or, and bitwise (inclusive) Or the accumulator with the data, and store the result in the accumulator. These instructions are 16-bit operations when the m flag is 0, and 8-bit operations when the m flag is 1. \n\nFor AND, if bit 0 of the accumulator (input) and bit 0 of the data are both 1, then bit 0 of the accumulator (result) will be 1, otherwise, bit 0 of the accumulator result will be 0. And so on for bits 1, 2, 3, etc. \n\nFor EOR, if bit 0 of the accumulator (input) and bit 0 of the data have the same value (e.g. both are zero), then bit 0 of the accumulator (result) will be 0, otherwise, bit 0 of the accumulator result will be 1. And so on for bits 1, 2, 3, etc. \n\nFor ORA, if bit 0 of the accumulator (input) and bit 0 of the data are both 0, then bit 0 of the accumulator (result) will be 0, otherwise, bit 0 of the accumulator result will be 1. And so on for bits 1, 2, 3, etc. \n\nFor all 3 instructions: \n\n*   The n flag reflects the high bit of the result. \n\n*   The z flag reflects whether the result is zero. \n\nExample: If the accumulator is $0F06 and the m flag is 0, then after EOR #$F103 \n\n*   the accumulator will be $FE05 \n\n*   the n flag will be 1 \n\n*   the z flag will be 0",
    BIT: "BIT tests the bits of the data with the bits of the accumulator. It is a 16-bit operation when the m flag is 0, and an 8-bit operation when the m flag is 1. \n\nJust as CMP is similar to SBC without overwriting the accumulator, BIT performs the same function as AND, but BIT only uses the result to set flags and does not overwrite the accumulator. \n\nImmediate addressing only affects the z flag (with the result of the bitwise And), but does not affect the n and v flags. All other addressing modes of BIT affect the n, v, and z flags. This is the only instruction in the 6502 family where the flags affected depends on the addressing mode. \n\n*   The n flag reflects the high bit of the data (note: just the data, not the bitwise And of the accumulator and the data). \n\n*   The v flag reflects the second highest bit of the data (i.e. bit 14 of the data when the m flag is 0, and bit 6 of the data when the m flag is 1, and again, just the data, not the bitwise And). \n\n*   The z flag reflects whether the result (of the bitwise And) is zero. \n\nExample: If the accumulator is $43, the DBR is $12, the m flag is 1, and \n\n*   $12ABCD contains $9C \n\nthen after BIT $ABCD \n\n*   the n flag will be 1 \n\n*   the v flag will be 0 \n\n*   the z flag will be 1",
    "TRB TSB":
      "TRB and TSB test the bits of the data with the bits of the accumulator (using a bitwise And, like BIT), then reset (i.e. clear) or set (respectively) the bits of the data that are ones in the accumulator. The accumulator is unchanged. These are 16-bit operations when the m flag is 0, and 8-bit operations when the m flag is 1. \n\nFor example, if the accumulator is $43 and the m flag is 1, then TRB resets (i.e. clears) bits 0, 1, and 6 of the data, and does not affect the other bits (bits 2, 3, 4, 5, and 7). Under the same condition, TSB sets bits 0, 1, and 6 of the data and does not affect the other bits. \n\n*   The z flag reflects whether the result (of the bitwise And) is zero. \n\nExample: If the accumulator is $43, the DBR is $12, the m flag is 1, and \n\n*   $12ABCD contains $9C \n\nthen after TSB $ABCD \n\n*   the z flag will be 1 \n\n*   $12ABCD will contain $DF",
    "ASL LSR ROL ROR":
      "ASL, LSR, ROL, and ROR shift the accumulator or the data left (ASL and ROL) and right (LSR and ROR). They are 16-bit operations when the m flag is 0, and 8-bit operations when the m flag is 1. \n\nFor accumulator addressing, the accumulator is shifted; for all other addressing modes, the data (at the memory location specified by the addressing mode) is shifted and the accumulator is not affected. \n\nASL shifts left; a zero is shifted into the low bit (bit 0); the high bit (bit 15 when the m flag is one, bit 7 when the m flag is 0) is shifted into the c flag. \n\nLSR shifts right; a zero is shifted into the high bit; the low bit is shifted into the c flag. \n\nROL shifts left; the (input) c flag is shifted into the low bit; the high bit is shifted into the c flag (result). \n\nROR shifts right; the (input) c flag is shifted into the high bit; the low bit is shifted into the c flag (result). \n\nFor all 4 instructions: \n\n*   The n flag reflects the high bit of the result. \n\n*   The z flag reflects whether the result is zero. \n\nAssemblers may require or permit the following syntaxes for accumulator addressing: \n\nASL \n\nASLA \n\nASL A \n\nLSR \n\nLSRA \n\nLSR A \n\nROL \n\nROLA \n\nROL A \n\nROR \n\nRORA \n\nROR A  \n\nAgain, for this reason, in some assemblers, the label A is reserved and cannot be used in source code. \n\nNote that for absolute,X addressing, when the m flag is 1, the cycle count matches the NMOS 6502 timing (7 cycles always) rather than the 65C02 (6 cycles if a page boundary was not crossed). \n\nExample: If the DBR is $12, the m flag is 1, and \n\n*   $12ABCD contains $8F \n\nthen after ASL $ABCD \n\n*   $12ABCD will contain $1E \n\n*   the n flag will be 0 \n\n*   the z flag will be 0 \n\n*   the c flag will be 1",
    "BCC BCS BEQ BMI BNE BPL BRA BVC BVS":
      "BRA unconditionally branches; the other 8 instructions branch based on the value of the n, v, z, or c flag. These instructions can branch -128 to 127 bytes from the address of the next instruction (i.e. the address of the instruction after the branch instruction); since all of these branch instructions are 2 byte instructions, that means the branch can be -126 to 129 bytes from the address of the branch instruction. \n\nNote, however, a page boundary is crossed when the branch destination is on a different page than the next instruction (again, the instruction after the branch instruction). This means that \n\nLABEL BRA LABEL+2 ; 3 cycles \n\nalways takes 3 cycles, no matter where the BRA instruction is located in memory, since the branch destination is the next instruction, i.e. they are the same address, and thus on the same page. \n\n*  BCC branches if the c flag is 0 \n\n*  BCS branches if the c flag is 1 \n\n*  BEQ branches if the z flag is 1 \n\n*  BMI branches if the n flag is 1 \n\n*  BNE branches if the z flag is 0 \n\n*  BPL branches if the n flag is 0 \n\n*  BVC branches if the v flag is 0 \n\n*  BVS branches if the v flag is 1 \n\nThe names BEQ and BNE come from the fact that these two instructions often follow a compare (CMP, CPX, or CPY) and thus will branch if the register and the data were equal (BEQ) or not equal (BNE). \n\nIn some assemblers, BGE (Branch if Greater than or Equal) and BLT (Branch if Less Than) are synonyms for BCS and BCC, respectively. The former names come from the fact the CMP, CPX, and CPY clear the c flag if the register was less than the data, and set the c flag if the register was greater than or equal to the data. \n\nNote that BRA actually has the same timing as the other instructions; the cycle count formula is different because there is no branch not taken case. \n\nExample: If the z flag is 0, then a BNE $C023 at $ABC000 will branch to $ABC023. (The displacement is $21 since the instruction after the BNE is at $ABC002.)",
    BRL: "BRL is like BRA, except that the branch displacement is 16 bits, instead of 8 bits, which means it can branch -32768 to 32767 bytes from the address of the next instruction (or -32765 to 32770 bytes from the address of the BRL instruction). However, since BRL wraps at bank boundaries, this means it can branch anywhere within the current (program) bank. \n\nBRL is one cycle longer than JMP absolute (which also can jump anywhere within the current bank). The reason BRL is used is for code (e.g. a section of code, or even an entire program) that can run no matter what address it is located at (in other words, its address isn't known until run time). \n\nExample: A BRL $C045 at $ABC000 will branch to $ABC045. (The displacement is $0042 since the instruction after the BRL is at $ABC003.)",
    "JMP JSL JSR":
      "JMP jumps to the address specified by the addressing mode. absolute, (absolute) and (absolute,X) addressing jump to an address within the current program bank; [absolute] and long addressing use a 24-bit address and can jump to any bank. \n\nNote that JMP (absolute) is 5 cycles, same as the NMOS 6502, but different from the 65C02 (6 cycles). \n\nAgain, in some assemblers, for [absolute] and/or long addressing, JML is a synonym for JMP. Also, some assemblers allow the syntax JML (absolute) for opcode $DC (i.e. JMP [absolute]), which is a 24-bit pointer, rather than a 16-bit pointer. Use of [absolute] is more consistent with the syntax (direct) and [direct], where parentheses indicate a 16-bit pointer, and square brackets indicate a 24-bit pointer. \n\nJSL pushes the K register (i.e. program bank register), then pushes the 16-bit address (high byte first, then low byte) of the JSL instruction plus 3 (one less than the address of the next instruction), then jumps to the address specified by the operand. Thus, if the JSL instruction (i.e. the $22 opcode) is at $12FFFD, then the bytes pushed are (in order): $12, $00, and $00, rather than $13, $00, and $00. \n\nJSR pushes the 16-bit address (i.e. the program counter) of the JSR instruction plus 2 onto the stack, and jumps to an address within the current program bank. In other words, the address pushed is one less than the address of the next instruction. The high byte is pushed first, then the low byte is pushed. \n\nSome assemblers allow JSR to be a synonym for JSL when a 24-bit address is used with JSR. In general, you would be well advised not to utilize this; i.e. not use JSR in place of JSL. A JSR pushes two bytes and is matched with an RTS; a JSL pushes three bytes and is matched with an RTL. A JSR LABEL that sometimes pushes two bytes (i.e. for absolute addressing) and sometimes pushes three bytes (i.e. for long addressing) can result in code that is quite difficult to follow and/or debug. \n\nExample: If the S register is $01FF, then a JSR $ABCD at $123456 \n\n*   stores $34 at $0001FF \n\n*   stores $58 at $0001FE \n\nthen jumps to $12ABCD, and \n\n*   the S register will be $01FD",
    "RTL RTS":
      "RTL returns from a subroutine called with JSL (from any bank). It pulls the low byte, then the high byte of the program counter from the stack, then increments the program counter, then pulls the K register (i.e. the program bank register) from the stack. This means that if $FF, $FF, and $12 are pulled from the stack, the instruction at $120000 (rather than $130000) will be executed next. \n\nRTS returns from a subroutine called with JSR (within the current program bank). It pulls the low byte, then the high byte of the program counter from the stack, then increments the program counter. \n\nExample: if the K register is $12, the S register is $01FD, and \n\n*   $0001FE contains $56 \n\n*   $0001FF contains $34 \n\nthen an RTS will return to $123457, and \n\n*   the S register will be $01FF",
    "BRK COP":
      'In native mode, BRK and COP push the K register (i.e. program bank register), then push the 16-bit address (again high byte first, then low byte) of the BRK or COP instruction plus 2, then push the P register, then jump to the appropriate (16-bit) native mode interrupt vector. The native mode BRK vector is at $00FFE6 and the native mode COP vector is at $00FFE4. \n\nIn emulation mode, BRK and COP push the 16-bit address (again high byte first, then low byte) of the BRK or COP instruction plus 2, then push the P register, then jump to the appropriate (16-bit) emulation mode interrupt vector. The emulation mode BRK vector is at $00FFFE and the emulation mode COP vector is at $00FFF4. When BRK pushes the P register, the b flag (i.e. bit 5) will be set; because, in emulation mode, as on the NMOS 6502 and 65C02, BRK and IRQ share an interrupt vector, this allows the BRK/IRQ handler to distinguish a BRK from an IRQ. COP in emulation mode may seem somewhat paradoxical, since it was not available on the NMOS 6502 or 65C02, but COP can be used in emulation mode, and when pushing onto the stack it will wrap at the page 1 boundary (in other words, it is treated as an "old" instruction, rather than a "new" instruction). \n\n*   The i flag is set after pushing the P register; furthermore, like the 65C02 (but unlike the NMOS 6502), the d flag is cleared after pushing the P register, thus ensuring that the d flag has a known value (i.e. zero) for BRK and COP handlers. \n\nAn important note: as on the NMOS 6502 and 65C02, the correct way for an emulation mode BRK/IRQ handler to distinguish a BRK from an IRQ is to use the stacked value of the b flag (i.e. bit 5 of the stacked value of the P register). Thus, this is correct (assuming that 2,S is within page 1; i.e. that S < $01FE, which is usually the case): \n\n   EMULATION_BRKIRQ_HANDLER \n\n   PHA \n\n   LDA 2,S \n\n   BIT #$10 \n\n   BNE BRK \n\n   BEQ IRQ \n\nbut this is incorrect (since it uses the current, rather than the stacked value of the P register): \n\n   EMULATION_BRKIRQ_HANDLER \n\n   PHA \n\n   PHP \n\n   PLA \n\n   BIT #$10 \n\n   BNE BRK \n\n   BEQ IRQ \n\nAlso, there are several ramifications of BRK and COP to keep in mind. First, the fact that both BRK and COP push the address of the BRK or COP instruction plus 2 means that RTI will return to the address of the BRK or COP instruction plus 2; thus, both instructions have a signature byte (even though neither instruction makes any use of this signature byte) which is skipped. Since most NMOS 6502 and 65C02 assemblers will assemble a BRK instruction as a one byte instruction (i.e. the opcode $00) rather than a two byte instruction (i.e. the opcode $00 and the signature byte), most 65C816 assemblers will also assemble a BRK instruction as a one byte instruction rather than a two byte instruction; despite this, on all members of the 6502 family, the BRK instruction is really a two byte instruction, consisting of an opcode ($00) and a signature byte. \n\nSecond, the fact that all interrupt vectors are 16-bit addresses (rather than 24-bit addresses) means that the interrupt handlers must be located in bank 0 (or at least begin in bank 0, since it\'s possible to use JMP or JSL to execute code in another bank). \n\nThird, because emulation mode pushes a 16-bit address, a BRK or COP must be executed from bank 0 in emulation mode; the interrupt handler has no way of determining which bank to return to, since the program bank is not pushed. Furthermore, the handler must return from bank 0 (i.e. the RTI instruction of the handler must be located in bank 0) since RTI (in emulation mode) will pull a 16-bit address, rather than a 24-bit address. (Actually, there is a way to use BRK and COP in emulation mode from a nonzero bank: if the BRK or COP is preceded by a PHK, then PLP RTL can be used to instead of RTI to return from the interrupt handler. However, because RTL increments the program counter after pulling it from the stack, this will return to the address of the BRK or COP instruction plus 3; in effect, this behaves as though BRK and COP had 2 signature bytes rather than 1 signature byte. Note that most BRK and COP handlers do not make use of this technique.) \n\nFourth, because RTI pulls the K register in native mode, but not in emulation mode (essentially, it pulls a 24-bit address in the native mode, but a 16-bit address in emulation mode), it is vitally important that a native mode handler returns in native mode and an emulation mode handler returns in emulation mode. Generally, the handler itself would not need to switch modes, but if it calls a subroutine that executes in the other mode, it is important to ensure that the 65C816 is switched back into the original mode before returning from the handler. \n\nExample: If the S register is $01FF, the e flag is 0, the P register is $08, and \n\n*   $00FFE6 contains $AB \n\n*   $00FFE7 contains $CD \n\nthen a BRK at $123456 \n\n*   stores $12 at $0001FF \n\n*   stores $34 at $0001FE \n\n*   stores $58 at $0001FD \n\n*   stores $08 at $0001FC \n\nthen jumps to $00CDAB, and \n\n*   the S register will be $01FB \n\n*   the d flag will be 0 \n\n*   the i flag will be 1',
    RTI: "In native mode, the P register is pulled, then the 16-bit program counter is pulled (low byte first, then high byte), then the K register (i.e. program bank register) is pulled. \n\nIn emulation mode, the P register is pulled, then the 16-bit program counter is pulled (again low byte first, then high byte). \n\nNote that unlike RTS (and RTL), the program counter is not incremented after it is pulled from the stack. \n\nAgain, as noted in the previous two sections, before returning from an interrupt via an RTI instruction, the mode (native or emulation) must be the same as it was when the interrupt occurred, since a different number of bytes are pulled from the stack. \n\nExample: If the S register is $01FB, the e flag is 0, and \n\n*   $0001FC contains $08 \n\n*   $0001FD contains $12 \n\n*   $0001FE contains $34 \n\n*   $0001FF contains $56 \n\nthen an RTI will jump to $563412, and \n\n*   the S register will be $01FF \n\n*   the P register will be $08",
    "CLC CLD CLI CLV SEC SED SEI":
      "CLC, CLD, CLI, and CLV clear the c, d, i, and v flags respectively. \n\nSEC, SED, and SEI set the c, d, and i flags respectively. \n\nIncidentally, you may wish to define SEI and CLI as macros called (e.g.) DI and EI (i.e. Disable Interrupt and Enable Interrupt); that way you don't have to remember whether i flag 0 means disable interrupts (it doesn't) or enable interrupts (it does). \n\nExample: after a CLC \n\n*   the c flag is 0",
    "REP SEP":
      "REP and SEP reset (i.e. clear) and set (respectively) the bits of the P register that are ones in the operand; bits of the P register that are zero in the operand are not affected. (This is analogous to how TRB and TRB reset and set the bits of the memory location that are ones in the accumulator, and do not affect the bits in the memory location that are zero in the accumulator.) \n\nNote that when the e flag is 1, the m and x flag are forced to 1, so after the REP or SEP, both flags will still be 1 no matter what the operand is. \n\nExample: If the e flag is 0, then after SEP #$21 \n\n*   the m and c flags will be 1 \n\n*   the n, v, x, d, i, and z flags will not be affected",
    "MVN MVP":
      "MVN and MVP move blocks of memory downward (i.e. from a higher (source) address to a lower (destination) address) and upward (i.e. from a lower (source) address to a higher (destination) address). The (16-bit) accumulator contains the number of bytes to move minus 1, the X register contains the 16-bit source address, and the Y register contains the 16-bit destination address. The source bank and the destination bank are specified in the operand. Both the source and the destination address wrap at the bank boundary. For MVN, X and Y are the start (i.e. lowest address) of the block, but for MVP, X and Y are the end (i.e. highest address) of the block. \n\nMVN and MVP decrement the (16-bit) accumulator and increment (for MVN) or decrement (for MVP) both X and Y each time a byte is moved; this means that the accumulator will be $FFFF after an MVN or MVP (since it contained the number of bytes to move minus 1) and the X and Y registers will be larger (for MVN) or smaller (for MVP) by the number of bytes moved. \n\nAlso, the DBR is overwritten by MVN and MVP; after an MVN or MVP, the destination bank is stored in the DBR. Thus, it may be necessary in some instances to put a PHB instruction before the MVN or MVP, and a PLB instruction after the MVN or MVP. \n\nEach byte moved takes 7 cycles. MVN and MVP can be interrupted by IRQ and NMI before the move is complete (unlike every other instruction, which must finish before an IRQ or NMI is serviced); however, they can only be interrupted every seventh cycle, i.e. they cannot be interrupted in the middle of moving a byte, but it can be interrupted between moving one byte and moving the next. \n\nAnother way to describe the MVN and MVP instruction is to say that they are 7 cycle instructions (sharp-eyed readers may have noticed that the cycle count in the table above is 7, rather than 7 times the number of bytes moved); after moving the byte whose (16-bit) source address is in the X register and whose (16-bit) destination address is in the Y register (and whose source and destination bank are specified by the operand), the destination bank is stored in the DBR, the (16-bit) accumulator is decremented, and both the X and Y registers are incremented (for MVN) or decremented (for MVP); then the program counter will be the address of the next instruction (i.e. the instruction after the MVN or MVP) if the accumulator is $FFFF, and the program counter will be the address of the the MVN or MVP if the accumulator is not $FFFF (i.e. the instruction jumps to itself if the accumulator is not $FFFF). Thus, the instruction is executed until A is $FFFF, both the X and Y register are incremented or decremented until the entire block is moved, the source and destination addresses wrap at bank boundaries, the instruction must complete all 7 cycles before an IRQ or NMI can only be serviced, and it will take 7 cycles per byte moved total. \n\nAn interesting question is what happens when MVN is used move upward and MVP is used to move downward. If the source and destination banks are different, or the source and destination blocks do not overlap, then the (final) result is no different than if the upward move had used MVP (and X and Y were updated to begin at the end of the block) or the downward move had used MVN (and, likewise, X and Y were updated to begin at the start of the block). However, if the source and destination banks are the same and the blocks do overlap, MVN and MVP have an interesting (and useful) property; they make copies of a pattern. To see how this works, if the accumulator is $0003, the X register is $1000, the Y register is $1002, and \n\n*   $001000 contains $AB \n\n*   $001001 contains $CD \n\nthen after an MVN #0,#0 \n\n*   $001002 will contain $AB \n\n*   $001003 will contain $CD \n\n*   $001004 will contain $AB \n\n*   $001005 will contain $CD \n\nThis happens because \n\n*   the byte at $001000 ($AB) is stored at $001002 \n\n*   the byte at $001001 ($CD) is stored at $001003 \n\n*   the byte at $001002 (which now contains $AB) is stored at $001004 \n\n*   the byte at $001003 (which now contains $CD) is stored at $001005 \n\nIncidentally, some assemblers allow an alternate syntax (in addition to the traditional syntax of a pair of 8-bit banks) where the operand is a pair of 24-bit addresses; thus, for such assemblers, MVN #$123456,#$789ABC is equivalent to MVN #$12,#$78. \n\nFinally, note that while MVN and MVP can be used when the x flag is 1 (and this includes the case when the e flag is 1), neither instruction is particularly helpful in that situation, because the high bytes of both the X and Y are $00, so both the source are destination blocks are confined to the first page (i.e. addresses $0000 to $00FF) of the block. \n\nExample: If the accumulator is $0001, the X register is $1000, the Y register is $2000, and \n\n*   $000FFF contains $AB \n\n*   $001000 contains $CD \n\nthen after an MVP #0,#0 \n\n*   the accumulator will be $FFFF \n\n*   the X register will be $0FFE \n\n*   the Y register will be $1FFE \n\n*   the DBR will be $00 \n\n*   $001FFF will contain $AB \n\n*   $002000 will contain $CD",
    "NOP WDM":
      "NOP, as its name implies, performs no operation (affecting no flags or registers); it is primarily useful for (a) delaying 2 cycles when a routine requires exact, or special, timing, (b) disabling code via patch, or (c) reserving space for self-modifying code. \n\nWDM are the initials of William D. Mensch, Jr, the designer of the 65C816 (and the 65C02). This opcode is reserved for future expansion. On the 65C816, it is acts like a 2-byte, 2-cycle NOP (note that the actual NOP instruction is only 1 byte). The second byte is read, but ignored. This can be used to skip 1-byte instructions. \n\nExample: when entering \n\n    LABEL1 INX \n\n       DB  $42 ;WDM opcode \n\n    LABEL2 DEX \n\nat LABEL1, the X register will be incremented and the DEX will not be executed, because the WDM opcode ($42) will treat it as immediate data and ignore it. (The X register will be decremented when entering at LABEL2.)",
    "PEA PEI PER":
      "PEA, PEI, and PER all push a 16-bit value onto the stack. In fact, they could be thought of as the different addressing modes of the same instruction, since the operation is otherwise the same. This is analogous to there being different instruction names for JMP absolute and BRL, which are really the same operation, it's just that there is no assembler syntax to differentiate absolute from relative addressing, hence the different names. \n\nNote, however, that the names of these instructions are a bit misleading. The 16-bit value that is pushed onto the stack need not be an address; it could be a constant. Because of the names, the operand syntax permitted (or required) can vary from assembler to assembler. \n\nPEA #$1234 is the syntax that is most consistent with the operation of the instruction, since it simply pushes the value $1234, but does not access memory location $1234 (in any bank). This is analogous to LDA #$1234 vs. LDA $1234; the former does not access memory location $1234 (in any bank), but the latter does (in some bank). Nonetheless, some assemblers permit (or require) the syntax PEA $1234. \n\nLikewise, PEI $12 is the syntax that is most consistent with the operation of the instruction. It pushes the same 16-bit value that (assuming the m flag is 0) LDA $12 loads into the accumulator, rather that the value that LDA ($12) loads into the accumulator. Nonetheless, some assemblers permit (or require) the syntax PEI ($12). Note, however, that PEI always pushes a 16-bit value no matter what the value of the m flag (or, for that matter the x flag) is. \n\nMost assemblers use the syntax PER LABEL, rather than PER #LABEL; in fact, assemblers that even permit the latter syntax (much less require it) are rare. Even though PER $1234 itself does not access memory location $1234, subsequent instructions in any program that uses PER are likely to use the value pushed to access that memory location shortly thereafter. For example \n\n       PER LABEL2-1 \n\n       BRL LABEL1 \n\nLABEL2 \n\nis like a JSR LABEL1 but with relative (instead of absolute) addressing. PER doesn't access address LABEL2, but address LABEL2 gets accessed when the subroutine returns and the opcode at LABEL2 is fetched. A (somewhat) comparable situation is JMP $1234; the JMP itself does not access $1234, but $1234 is accessed when the opcode at $1234 (i.e. the next instruction) is fetched. \n\nExample: If the S register is $01FF, then after PEA #$1234, \n\n*   $0001FF will contain $12 \n\n*   $0001FE will contain $34 \n\n*   the S register will be $01FD",
    "PHA PHX PHY PLA PLX PLY":
      "PHA, PHX, and PHY push the accumulator, X register, and Y register, respectively, onto the stack. PLA, PLX, and PLY pull the accumulator, X register, and Y register, respectively, from the stack. \n\nWhen the m flag is 0, PHA and PLA push and pull a 16-bit value, and when the m flag is 1, PHA and PLA push and pull an 8-bit value. \n\nWhen the x flag is 0, PHX, PHY, PLX, and PLY push and pull a 16-bit value, and when the x flag is 1, PHX, PHY, PLX, and PLY push and pull an 8-bit value. \n\nFor PLA, PLX, and PLY, the n flag is 1 if the high bit of the result (pulled into the register) is 1, and the n flag is 0 when the high bit of the result is 0; the z flag is 1 if the result is zero, and the z flag is 0 if the result is nonzero. \n\nExample: If the S register is $01FD, the m flag is 0, and \n\n*   $0001FE contains $AB \n\n*   $0001FF contains $CD \n\nthen after a PLA \n\n*   the accumulator will be $CDAB \n\n*   the n flag will be 1 \n\n*   the z flag will be 0 \n\n*   the S register will be $01FF",
    "PHB PHD PHK PHP PLB PLD PLP":
      "PHB, PHD, PHK, and PHP push the DBR, the D register, the K register, and the P register, respectively, onto the stack. PLB, PLD, and PLP pull the DBR, the D register, and the P register, respectively, from the stack. \n\nPHP, PHK, PHP, PLB, and PLP push and pull one byte from the stack; PHD and PLD push and pull two bytes from the stack. \n\nFor PLB and PLD, the n flag is 1 when the high bit of the result (i.e. the value pulled into the register) is 1, and the n flag is 0 when high bit of the result is 0; the z flag is 1 when the result is zero, and the z flag is 0 when the result is nonzero. \n\nFor PLP, (all of) the flags are pulled from the stack. Note that when the e flag is 1, the m and x flag are forced to 1, so after the PLP, both flags will still be 1 no matter what value is pulled from the stack. \n\nIncidentally, note that the only way to change the value of the DBR without moving memory (with MVN or MVP) is the PLB instruction; there are no load or transfer instructions that change the DBR. \n\nExample: If the S register is $01FD and \n\n*   $0001FE contains $AB \n\n*   $0001FF contains $CD \n\nthen after a PLD \n\n*   the D register will be $CDAB \n\n*   the n flag will be 1 \n\n*   the z flag will be 0 \n\n*   the S register will be $01FF",
    "STP WAI":
      "STP stops the clock input of the 65C816, effectively shutting down the 65C816 until a hardware reset (interrupt) occurs. This puts the 65C816 into a low power state. This is useful for applications (circuits) that require low power consumption, but STP is rarely seen otherwise. \n\nWAI puts the 65C816 into a low power sleep state until a hardware interrupt occurs. In addition to reducing power consumption, using WAI also ensures that the interrupt will be recognized immediately. In other words, if an interrupt (e.g. an NMI) occurs in the middle of an instruction (e.g. ADC), the instruction must finish before the interrupt will be recognized (i.e. before jumping to the interrupt vector). When WAI is used, once its third cycle is complete, the 65C816 will wait for the interrupt and can respond to it without any additional delay whenever it occurs. \n\nWhen the i flag is 1, interrupts are disabled, and normally an IRQ would be ignored. However, WAI when the i flag is 1 is a special case; specifically, when an IRQ occurs (after the WAI instruction), the 65C816 will continue with the next instruction rather than jumping to the interrupt vector. This means an IRQ can be responded to within one cycle. The interrupt handler is effectively inline code, rather than a separate routine, and thus it does not end with an RTI, resulting in fewer cycles needed to handle the interrupt.",
    "TAX TAY TSX TXA TXS TXY TYA TYX":
      "TAX, TAY, TSX, TXA, TXS, TXY, TYA, and TYX transfer (i.e. copy) the contents from one register to another. The second letter of the instruction is the register transferred from, and the third letter of the instruction is the register transferred to; so (e.g.) TXY transfers the contents of the X register to the Y register. \n\nThe size of the destination register (i.e. the register transferred to) determines whether these instructions are 8-bit operations or 16-bit operations. When the destination register is 8 bits wide, 8 bits are transferred, and when the destination register is 16 bits wide, 16 bits are transferred. \n\nThe width of the accumulator is based on the m flag, and the width of the X and Y registers is based on the x flag, but the S register is always considered 16 bits wide. However, when the e flag is 1, SH is forced to $01, so in effect, TXS is an 8-bit transfer in this case since XL is transferred to SL and SH remains $01. Note that when the e flag is 0 and the x flag is 1 (i.e. 8-bit native mode), that XH is forced to zero, so after a TXS, SH will be $00, rather than $01. This is an important difference that must be accounted for if you want to run emulation mode code in (8-bit) native mode. \n\n*   The n flag is 1 when the high bit of the result (i.e. the value transferred from one register to the other) is 1, and the n flag is 0 when the high bit of the result is 0. \n\n*   The z flag is 1 when the result is zero, and the z flag is 0 when the result is nonzero. \n\nExample: If the accumulator is $1234, the X register is $ABCD, and the m flag is 1, then after a TXA \n\n*   the accumulator will be $12CD \n\n*   the n flag will be 1 (since only $CD was actually transferred) \n\n*   the z flag will be 0",
    "TCD TCS TDC TSC":
      'TCD, TCS, TDC, and TSC transfer the C accumulator (the full 16-bit accumulator) to and from the D and S registers. These instructions always transfer 16 bits, no matter what the value of the m flag is. However, when the e flag is 1, SH is forced to $01, so in that case, TCS acts like an 8-bit transfer, by transferring the A accumulator (i.e. the low byte of the accumulator) to the SL register. \n\n*   The n flag is 1 when the high bit of the result (i.e. the value transferred from one register to the other) is 1, and the n flag is 0 when the high bit of the result is 0. \n\n*   The z flag is 1 when the result is zero, and the z flag is 0 when the result is nonzero. \n\nTAD, TAS, TDA, and TSA are alternate names for these instructions, and are allowed by many 65C816 assemblers. Note that the "C" names are somewhat more accurate names than the "A" names, since these instructions are always 16-bit operations, while other instruction names where A refers to the accumulator (e.g. PHA) are 8-bit operations or 16-bit operations, depending on the value of the m flag. \n\nExample: If the D register is $1234, then after a TDC \n\n*   the accumulator will be $1234 \n\n*   the n flag will be 0 \n\n*   the z flag will be 0',
    XBA:
      "XBA exchanges the B accumulator and the A accumulator, i.e. it swaps the high byte and the low byte of the accumulator. Note that this is a swap rather than a copy (as is the case for the transfer instructions). \n\nThe n and z flags are always based on an 8-bit result, no matter what the value of the m flag is. Specifically, they are based on the A accumulator (i.e. the low byte of the accumulator) result; in other words, the final value of the A accumulator, which is the same as the initial value of the B accumulator. \n\n*   The n flag is 1 when the high bit of the result is 1, and the n flag is 0 when the high bit of the result is 0. \n\n*   The z flag is 1 when the result is zero, and the z flag is 0 when the result is nonzero. \n\nSWA is an alternate name for this instruction, and is allowed by many 65C816 assemblers. \n\nExample: If the accumulator is $6789, then after an XBA \n\n*   the accumulator will be $8967 \n\n*   the n flag will be 0 \n\n*   the z flag will be 0",
    XCE: "XCE exchanges (i.e. swaps) the c and e flags. This is the only instruction that changes the value of the e flag. Note that when the e flag is 1, the m and x flags are forced to 1 (and consequently the XH and YH registers are forced to $00), and the SH register is forced to $01. \n\nExample: If the c flag is 0 and the e flag is 1, then after an XCE \n\n*   the c flag will be 1 \n\n*   the e flag will be 0",
  },
};

export default asm;
