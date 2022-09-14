import { PropertyType } from "~/utils/types";
interface AgentType {
  name?: string;
  surname?: string;
  position?: string;
  description?: string;
  tel?: string;
  mail?: string;
  office?: string;
  officeId?: string;
  img?: string;
  id?: string;
  properties: PropertyType[];
}

export default AgentType;
