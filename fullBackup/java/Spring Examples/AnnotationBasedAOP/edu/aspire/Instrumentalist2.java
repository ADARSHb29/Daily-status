package edu.aspire;

public class Instrumentalist2 implements Performer2 {
  public void perform() throws PerformanceException2 {
    instrument.play();
  }

  private Instrument2 instrument;

  public void setInstrument(Instrument2 instrument) {
    this.instrument = instrument;
  }

  public Instrument2 getInstrument() {
    return instrument;
  }
}
