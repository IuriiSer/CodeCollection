// CustomEventListner

// DESCRIPTION
// This event listner keeps different entities you want to look for and check it every ChecksFrequency ms

// Example of adding EventListner
// GlobalEvents.AddListner(
//   () => funcToGetValueYouLookingFor(),
//   currentValueYouLookingFor,
//   () => funcEventHandlerYouWantToCallOnNewValue(newVal)
// );
// Don`t forget to start your GlobalEvents Listner

const GlobalEvents = {
  ChecksFrequency: 50, // ms.
  EventsChecker: undefined, // entity for our setInterval func
  Events: [], // entities we want to check
  /**
   * @param  {} eName - name/id event
   * @param  {} eChecker - func to check event value
   * @param  {} eCurrentVal - event init value
   * @param  {} eHandler - func to do on new event value
   */
  AddListner(eName, eChecker, eCurrentVal, eHandler) {
    this.Events.push({
      eName: eName,
      eChecker: eChecker,
      eLastVal: eCurrentVal,
      eHandler: eHandler,
    });
  },
  /**
   * @param  {} eventNameToRemove - name of the event to remove
   */
  RemoveListner(eventNameToRemove) {
    const eIndex = this.Events.findIndex(
      (eventHadler) => eventHadler.eName === eventNameToRemove
    );
    if (!~eIndex) return;
    this.Stop();
    this.Events.splice(eIndex, 1);
    this.Start();
  },
  Start() {
    this.EventsChecker = setInterval(() => {
      this.Events.forEach((e) => {
        const eCurrentVal = e.eChecker();
        if (eCurrentVal === e.eLastVal) return;
        e.eHandler(eCurrentVal);
        e.eLastVal = eCurrentVal;
      });
    }, ChecksFrequency);
  },
  Stop() {
    clearInterval(this.EventsChecker);
  },
};
