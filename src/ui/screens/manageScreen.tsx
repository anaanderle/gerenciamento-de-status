// import { TextInput } from "../components";
import { useForm } from "../../hooks";
import {
  Title,
  TextInput,
  Button,
  Label,
  Preview,
  InputRadio,
  InputRadioDiv,
  ColorInputs,
  InputDiv,
  Section,
} from "../styles";

const colors = [
  "#009BFF",
  "#0046FF",
  "#6356EE",
  "#8850E1",
  "#8741B1",
  "#BF6CCF",
  "#CA5E97",
  "#ED92A8",
  "#B63954",
  "#CA5646",
  "#DF9655",
  "#EBD067",
  "#A8C74A",
  "#92CC82",
  "#00FFC4",
  "#1E1E1E",
  "#8D969D",
  "#D2D2D2",
  "#E8E8E8",
  "#F4F4F4",
];

export function ManageScreen() {
  const { formData, handleChange } = useForm({
    statusName: "",
    color: "#009BFF",
  });

  function handleSubmit(event: any) {
    event.preventDefault();

    console.log(formData);
  }

  function renderColors() {
    return colors.map((color) => (
      <InputRadioDiv color={color}>
        <InputRadio
          type="radio"
          id="color"
          name="color"
          value={color}
          onChange={handleChange}
        />
        <div></div>
      </InputRadioDiv>
    ));
  }

  return (
    <Section>
      <div>
        <span>Gerenciamento</span>
        <span>Status</span>
      </div>
      <Title>Gerenciamento</Title>

      <form onSubmit={handleSubmit}>
        <InputDiv>
          <label>Nome do status</label>
          <TextInput
            name="statusName"
            placeholder="Ex.: Aprovado"
            value={formData.statusName}
            onChange={handleChange}
          />
        </InputDiv>
        <Preview color={formData.color}>
          <span>{formData.statusName}</span>
        </Preview>
        <InputDiv>
          <label>Cor</label>
          <ColorInputs>{renderColors()}</ColorInputs>
        </InputDiv>
        <Button>Criar status</Button>
      </form>
    </Section>
  );
}
