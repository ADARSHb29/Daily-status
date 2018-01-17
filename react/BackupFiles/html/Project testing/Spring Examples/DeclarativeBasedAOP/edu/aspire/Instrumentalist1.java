package edu.aspire;

public class Instrumentalist1 implements Performer1 {
	private Instrument1 instrument;

	public void setInstrument(Instrument1 instrument) {
		this.instrument = instrument;
	}

	public Instrument1 getInstrument() {
		return instrument;
	}

	public void perform() throws PerformanceException1 {
		instrument.play();
	}
}
