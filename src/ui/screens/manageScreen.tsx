// import { TextInput } from "../components";
import { useForm } from "../../hooks";
import {
  Title,
  TextInput,
  Button,
  Preview,
  InputRadioDiv,
  ColorInputs,
  ItemDiv,
  Section,
} from "../styles";
import arrowIcon from "../../assets/icons/arrowIcon.svg";

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
        <input
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
        <img src={arrowIcon} alt="icon flecha" />
        <span>Status</span>
      </div>
      <Title>Gerenciamento de status</Title>

      <ItemDiv row>
        <ItemDiv>
          <label>Nome do status</label>
          <TextInput
            name="statusName"
            placeholder="Ex.: Aprovado"
            value={formData.statusName}
            onChange={handleChange}
            maxLength="13"
          />
        </ItemDiv>
        <ItemDiv>
          <span>Prévia</span>
          <Preview color={formData.color}>
            <span>{formData.statusName}</span>
          </Preview>
        </ItemDiv>
      </ItemDiv>

      <ItemDiv>
        <label>Cor</label>
        <ColorInputs>{renderColors()}</ColorInputs>
      </ItemDiv>
      <Button onClick={handleSubmit}>Criar status</Button>
    </Section>
  );
}
