import { useState } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../store/store.ts";

import { printOrderAPI } from "../services/printAgentService.ts";
import { getAxiosErrorMessage } from "../components/Utils/ErrorAxios.tsx";

const usePrintAgent = () => {
  const [printing, setPrinting] = useState(false);
  const [showPrinterModal, setShowPrinterModal] = useState(false);

  const printerActive = useSelector(
    (state: RootState) => state.printAgent.printerActive,
  );

  const printTicket = async (ticket: string) => {
    if (!printerActive) {
      setShowPrinterModal(true);
      return false;
    }

    try {
      setPrinting(true);

      await printOrderAPI(ticket);

      return true;
    } catch (error) {
      getAxiosErrorMessage(error);
      return false;
    } finally {
      setPrinting(false);
    }
  };

  return {
    printTicket,
    printing,
    printerActive,
    showPrinterModal,
    setShowPrinterModal,
  };
};

export default usePrintAgent;