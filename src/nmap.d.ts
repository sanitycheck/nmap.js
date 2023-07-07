import * as Primitive from './xml-primitives';

// Source files:
// http://localhost:8080/nmap.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _AddressType extends BaseType {
	addr: string;
	addrtype: attr_type;
}
interface AddressType extends _AddressType { constructor: { new(): AddressType }; }

export type attr_bool = ("true" | "false");
interface _attr_bool extends Primitive._string { content: attr_bool; }

export type attr_ipaddr = string;
type _attr_ipaddr = Primitive._string;

export type attr_numeric = string;
type _attr_numeric = Primitive._string;

export type attr_percent = string;
type _attr_percent = Primitive._string;

export type attr_type = ("ipv4" | "ipv6" | "mac");
interface _attr_type extends Primitive._string { content: attr_type; }

interface _DebuggingType extends BaseType {
	level: string;
}
interface DebuggingType extends _DebuggingType { constructor: { new(): DebuggingType }; }

interface _DistanceType extends BaseType {
	value: string;
}
interface DistanceType extends _DistanceType { constructor: { new(): DistanceType }; }

interface _ElemType extends BaseType {}
interface ElemType extends _ElemType { constructor: { new(): ElemType }; }

interface _ExtraportsType extends BaseType {
	count: string;
	state: string;
	extrareasons?: ExtrareasonsType[];
}
interface ExtraportsType extends _ExtraportsType { constructor: { new(): ExtraportsType }; }

interface _ExtrareasonsType extends BaseType {
	proto: port_protocols;
}
interface ExtrareasonsType extends _ExtrareasonsType { constructor: { new(): ExtrareasonsType }; }

interface _FinishedType extends BaseType {
	elapsed: string;
	exit: FinishedTypeExitType;
	time: string;
}
interface FinishedType extends _FinishedType { constructor: { new(): FinishedType }; }

type FinishedTypeExitType = ("error" | "success");
interface _FinishedTypeExitType extends Primitive._string { content: FinishedTypeExitType; }

interface _HopType extends BaseType {}
interface HopType extends _HopType { constructor: { new(): HopType }; }

export type host_states = ("up" | "down" | "unknown" | "skipped");
interface _host_states extends Primitive._string { content: host_states; }

interface _HosthintType extends BaseType {
	address: AddressType[];
	hostnames?: HostnamesType;
	status: StatusType;
}
interface HosthintType extends _HosthintType { constructor: { new(): HosthintType }; }

export type hostname_types = ("user" | "PTR");
interface _hostname_types extends Primitive._string { content: hostname_types; }

interface _HostnamesType extends BaseType {
	hostname?: HostnameType[];
}
interface HostnamesType extends _HostnamesType { constructor: { new(): HostnamesType }; }

interface _HostnameType extends BaseType {
	type: hostname_types;
}
interface HostnameType extends _HostnameType { constructor: { new(): HostnameType }; }

interface _HostscriptType extends BaseType {
	script: ScriptType[];
}
interface HostscriptType extends _HostscriptType { constructor: { new(): HostscriptType }; }

interface _HostsType extends BaseType {
	down: string;
	total: string;
	up: string;
}
interface HostsType extends _HostsType { constructor: { new(): HostsType }; }

interface _HostType extends BaseType {
	endtime: string;
	starttime: string;
	timedout: attr_bool;
	address: AddressType[];
	distance?: DistanceType[];
	hostnames?: HostnamesType[];
	hostscript?: HostscriptType[];
	ipidsequence?: IpidsequenceType[];
	os?: OsType[];
	ports?: PortsType[];
	smurf?: SmurfType[];
	status: StatusType[];
	tcpsequence?: TcpsequenceType[];
	tcptssequence?: TcptssequenceType[];
	times?: TimesType;
	trace?: TraceType[];
	uptime?: UptimeType[];
}
interface HostType extends _HostType { constructor: { new(): HostType }; }

interface _IpidsequenceType extends BaseType {}
interface IpidsequenceType extends _IpidsequenceType { constructor: { new(): IpidsequenceType }; }

interface _NmaprunType extends BaseType {
	scanner: NmaprunTypeScannerType;
	start: string;
	debugging: DebuggingType;
	host?: HostType[];
	hosthint?: HosthintType[];
	output?: OutputType[];
	postscript?: PostscriptType[];
	prescript?: PrescriptType[];
	runstats: RunstatsType;
	scaninfo?: ScaninfoType[];
	target?: TargetType[];
	taskbegin?: TaskbeginType[];
	taskend?: TaskendType[];
	taskprogress?: TaskprogressType[];
	verbose: VerboseType;
}
interface NmaprunType extends _NmaprunType { constructor: { new(): NmaprunType }; }

type NmaprunTypeScannerType = "nmap";
interface _NmaprunTypeScannerType extends Primitive._string { content: NmaprunTypeScannerType; }

interface _OsclassType extends BaseType {
	cpe?: string[];
}
interface OsclassType extends _OsclassType { constructor: { new(): OsclassType }; }

interface _OsfingerprintType extends BaseType {}
interface OsfingerprintType extends _OsfingerprintType { constructor: { new(): OsfingerprintType }; }

interface _OsmatchType extends BaseType {
	accuracy: string;
	line: string;
	osclass?: OsclassType[];
}
interface OsmatchType extends _OsmatchType { constructor: { new(): OsmatchType }; }

interface _OsType extends BaseType {
	osfingerprint?: OsfingerprintType[];
	osmatch?: OsmatchType[];
	portused?: PortusedType[];
}
interface OsType extends _OsType { constructor: { new(): OsType }; }

interface _OutputType extends BaseType {
	type: OutputTypeTypeType;
}
interface OutputType extends _OutputType { constructor: { new(): OutputType }; }

type OutputTypeTypeType = "interactive";
interface _OutputTypeTypeType extends Primitive._string { content: OutputTypeTypeType; }

interface _OwnerType extends BaseType {}
interface OwnerType extends _OwnerType { constructor: { new(): OwnerType }; }

export type port_protocols = ("ip" | "tcp" | "udp" | "sctp");
interface _port_protocols extends Primitive._string { content: port_protocols; }

export type port_states = string;
type _port_states = Primitive._string;

interface _PortsType extends BaseType {
	extraports?: ExtraportsType[];
	port?: PortType[];
}
interface PortsType extends _PortsType { constructor: { new(): PortsType }; }

interface _PortType extends BaseType {
	portid: string;
	protocol: port_protocols;
	owner?: OwnerType;
	script?: ScriptType[];
	service?: ServiceType;
	state: StateType;
}
interface PortType extends _PortType { constructor: { new(): PortType }; }

interface _PortusedType extends BaseType {
	portid: string;
	proto: port_protocols;
	state: string;
}
interface PortusedType extends _PortusedType { constructor: { new(): PortusedType }; }

interface _PostscriptType extends BaseType {
	script: ScriptType[];
}
interface PostscriptType extends _PostscriptType { constructor: { new(): PostscriptType }; }

interface _PrescriptType extends BaseType {
	script: ScriptType[];
}
interface PrescriptType extends _PrescriptType { constructor: { new(): PrescriptType }; }

interface _RunstatsType extends BaseType {
	finished: FinishedType;
	hosts: HostsType;
}
interface RunstatsType extends _RunstatsType { constructor: { new(): RunstatsType }; }

export type scan_types = ("syn" | "ack" | "bounce" | "connect" | "null" | "xmas" | "window" | "maimon" | "fin" | "udp" | "sctpinit" | "sctpcookieecho" | "ipproto");
interface _scan_types extends Primitive._string { content: scan_types; }

interface _ScaninfoType extends BaseType {
	numservices: string;
	protocol: port_protocols;
	type: scan_types;
}
interface ScaninfoType extends _ScaninfoType { constructor: { new(): ScaninfoType }; }

interface _ScriptType extends BaseType {
	elem?: ElemType[];
	table?: TableType[];
}
interface ScriptType extends _ScriptType { constructor: { new(): ScriptType }; }

export type service_confs = ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10");
interface _service_confs extends Primitive._string { content: service_confs; }

interface _ServiceType extends BaseType {
	conf: service_confs;
	highver: string;
	lowver: string;
	method: ServiceTypeMethodType;
	proto: ServiceTypeProtoType;
	rpcnum: string;
	tunnel: ServiceTypeTunnelType;
	cpe?: string[];
}
interface ServiceType extends _ServiceType { constructor: { new(): ServiceType }; }

type ServiceTypeMethodType = ("table" | "probed");
interface _ServiceTypeMethodType extends Primitive._string { content: ServiceTypeMethodType; }

type ServiceTypeProtoType = "rpc";
interface _ServiceTypeProtoType extends Primitive._string { content: ServiceTypeProtoType; }

type ServiceTypeTunnelType = "ssl";
interface _ServiceTypeTunnelType extends Primitive._string { content: ServiceTypeTunnelType; }

interface _SmurfType extends BaseType {
	responses: string;
}
interface SmurfType extends _SmurfType { constructor: { new(): SmurfType }; }

interface _StateType extends BaseType {
	state: string;
}
interface StateType extends _StateType { constructor: { new(): StateType }; }

interface _StatusType extends BaseType {
	state: host_states;
}
interface StatusType extends _StatusType { constructor: { new(): StatusType }; }

interface _TableType extends BaseType {
	elem?: ElemType[];
	table?: TableType[];
}
interface TableType extends _TableType { constructor: { new(): TableType }; }

interface _TargetType extends BaseType {
	reason: TargetTypeReasonType;
	status: TargetTypeStatusType;
}
interface TargetType extends _TargetType { constructor: { new(): TargetType }; }

type TargetTypeReasonType = "invalid";
interface _TargetTypeReasonType extends Primitive._string { content: TargetTypeReasonType; }

type TargetTypeStatusType = "skipped";
interface _TargetTypeStatusType extends Primitive._string { content: TargetTypeStatusType; }

interface _TaskbeginType extends BaseType {
	time: string;
}
interface TaskbeginType extends _TaskbeginType { constructor: { new(): TaskbeginType }; }

interface _TaskendType extends BaseType {
	time: string;
}
interface TaskendType extends _TaskendType { constructor: { new(): TaskendType }; }

interface _TaskprogressType extends BaseType {
	etc: string;
	percent: string;
	remaining: string;
	time: string;
}
interface TaskprogressType extends _TaskprogressType { constructor: { new(): TaskprogressType }; }

interface _TcpsequenceType extends BaseType {
	index: string;
}
interface TcpsequenceType extends _TcpsequenceType { constructor: { new(): TcpsequenceType }; }

interface _TcptssequenceType extends BaseType {}
interface TcptssequenceType extends _TcptssequenceType { constructor: { new(): TcptssequenceType }; }

interface _TimesType extends BaseType {}
interface TimesType extends _TimesType { constructor: { new(): TimesType }; }

interface _TraceType extends BaseType {
	hop?: HopType[];
}
interface TraceType extends _TraceType { constructor: { new(): TraceType }; }

interface _UptimeType extends BaseType {
	seconds: string;
}
interface UptimeType extends _UptimeType { constructor: { new(): UptimeType }; }

interface _VerboseType extends BaseType {
	level: string;
}
interface VerboseType extends _VerboseType { constructor: { new(): VerboseType }; }

export interface document extends BaseType {
	address: AddressType;
	cpe: string;
	debugging: DebuggingType;
	distance: DistanceType;
	elem: ElemType;
	extraports: ExtraportsType;
	extrareasons: ExtrareasonsType;
	finished: FinishedType;
	hop: HopType;
	host: HostType;
	hosthint: HosthintType;
	hostname: HostnameType;
	hostnames: HostnamesType;
	hosts: HostsType;
	hostscript: HostscriptType;
	ipidsequence: IpidsequenceType;
	nmaprun: NmaprunType;
	os: OsType;
	osclass: OsclassType;
	osfingerprint: OsfingerprintType;
	osmatch: OsmatchType;
	output: OutputType;
	owner: OwnerType;
	port: PortType;
	ports: PortsType;
	portused: PortusedType;
	postscript: PostscriptType;
	prescript: PrescriptType;
	runstats: RunstatsType;
	scaninfo: ScaninfoType;
	script: ScriptType;
	service: ServiceType;
	smurf: SmurfType;
	state: StateType;
	status: StatusType;
	table: TableType;
	target: TargetType;
	taskbegin: TaskbeginType;
	taskend: TaskendType;
	taskprogress: TaskprogressType;
	tcpsequence: TcpsequenceType;
	tcptssequence: TcptssequenceType;
	times: TimesType;
	trace: TraceType;
	uptime: UptimeType;
	verbose: VerboseType;
}
export var document: document;
